import json
import sys
from pprint import pprint

with open('channel.json') as data_file:
	data = json.load(data_file)
# pprint(data)
# print (data["GroupChannel"]["5"]["channelList"])
data1 = data["GroupChannel"]["5"]["channelList"]
# print(data1)
keyNeed = sys.argv[1]
output = ''
for key in data1:
	output += ',' + data1[key][keyNeed]
print (output[1:])