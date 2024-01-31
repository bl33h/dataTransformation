#Copyright (C), 2024-2025, bl33h
#FileName: randomDataGenerator
#Author: Sara Echeverria
#Version: I
#Creation: 30/01/2024
#Last modification: 30/01/2024

from pymongo import MongoClient
from faker import Faker
from datetime import datetime, timedelta
import random

# mongo connection
client = MongoClient('mongodb://localhost:27017/') 
db = client['lab2']
collection = db['users']

fake = Faker()

# data generation
for _ in range(50000):
    usuario = {
        'nombre': fake.name(),
        'email': fake.email(),
        'fecha_registro': fake.date_time_this_decade(),
        'puntos': random.randint(1, 1000),
        'historial_compras': [{'producto': 'Producto 1', 'fecha': fake.date_time_this_year()}],
        'direccion': {'calle': fake.street_address(), 'ciudad': fake.city(), 'codigo_postal': fake.zipcode()},
        'tags': [fake.word() for _ in range(random.randint(1, 5))] + ['tag2'],
        'archivo': fake.boolean(),
        'notas': fake.text(),
        'visitas': random.randint(1, 1000),
        'amigos': [random.randint(1, 10000) for _ in range(random.randint(1, 5))],
        'preferencias': {'color': fake.color_name(), 'idioma': fake.language_code(), 'tema': fake.word()}
    }

    collection.insert_one(usuario)

print("the documents have been placed succesfully.")