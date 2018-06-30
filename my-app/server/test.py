import client as s

client = s.Client(key='J3FTrcaAu92p5uSonfhiq5Jbf33QUum27O3Z9AbR')

result_geocoding = client.geocode("Bernauerstrasse 10 Berlin")

print(result_geocoding)