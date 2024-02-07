// 1.1.1
db.users.find({puntos: {$gt: 500}})

// 1.1.2
db.users.find({"historial_compras": {$elemMatch: {"producto": "Producto 1", "fecha": {$gte: new Date((new Date()).getTime() - 7 * 24 * 60 * 60 * 1000)}}}})

// 1.1.3
db.users.find({tags: "tag2", visitas: {$gt: 100}})

// 1.1.4
db.users.find({"preferencias.color": "Blue", amigos: {$gte: 1000, $lte: 2000}})

// 1.2.1
db.users.find({puntos: {$gt: 500}}).explain("executionStats")

// 1.2.2
db.users.find({"historial_compras": {$elemMatch: {"producto": "Producto 1", "fecha": {$gte: new Date((new Date()).getTime() - 7 * 24 * 60 * 60 * 1000)}}}}).explain("executionStats")

// 1.2.3
db.users.find({tags: "tag2", visitas: {$gt: 100}}).explain("executionStats")

// 1.2.4
db.users.find({"preferencias.color": "Blue", amigos: {$gte: 1000, $lte: 2000}}).explain("executionStats")

// 1.3.1
db.users.createIndex({activo: 1, puntos: 1})

// 1.3.2
db.users.createIndex({"historial_compras.producto": 1, "historial_compras.fecha": 1})

// 1.3.3
db.users.createIndex({tags: 1, visitas: 1})

// 1.3.4
db.users.createIndex({"preferencias.color": 1, amigos: 1})´

// 1.4 (index)
db.users.find({puntos: {$gt: 500}}).explain("executionStats")
db.users.find({"historial_compras": {$elemMatch: {"producto": "Producto 1", "fecha": {$gte: new Date((new Date()).getTime() - 7 * 24 * 60 * 60 * 1000)}}}}).explain("executionStats")
db.users.find({tags: "tag2", visitas: {$gt: 100}}).explain("executionStats")
db.users.find({"preferencias.color": "Blue", amigos: {$gte: 1000, $lte: 2000}}).explain("executionStats")

// 1.5
db.users.countDocuments()

// 1.6
db.users.find({puntos: {$gt: 500}}).explain("executionStats")
db.users.find({"historial_compras": {$elemMatch: {"producto": "Producto 1", "fecha": {$gte: new Date((new Date()).getTime() - 7 * 24 * 60 * 60 * 1000)}}}}).explain("executionStats")
db.users.find({tags: "tag2", visitas: {$gt: 100}}).explain("executionStats")
db.users.find({"preferencias.color": "Blue", amigos: {$gte: 1000, $lte: 2000}}).explain("executionStats")

// 2.1
db.getCollectionInfos()
