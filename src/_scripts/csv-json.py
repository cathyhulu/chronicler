import csv
import json

def make_json (csvFilePath, jsonFilePath):
  jsonData = {}
  jsonData['data'] = []

  with open(csvFilePath, mode='r') as file:
    csvFile = csv.DictReader(file)
    for rows in csvFile:
      rowData = {}
      for key, value in rows.items():
        if value.isnumeric():
          value =int(value)
        rowData[key] = value
      jsonData['data'].append(rowData)

  with open(jsonFilePath, mode='w') as jsonFile:
    jsonFile.write(json.dumps(jsonData, indent=4))


csvFilePath = '../_data/test.csv'
jsonFilePath = '../_data/test.json'

make_json(csvFilePath, jsonFilePath)