import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  route: string;
  exemple1: string = '{nom: "Her", acteurs: [{nom: "Johansson", prenom: "Scarlett"}, {nom: "Phoenix", prenom: "Joaquim"}]}';
  exemple2: string = '{nom: "Avengers", acteurs : [{nom: "Johansson", prenom: "Scarlett"}]}';
  exemple3: string = '{\n' +
    '        "_id": "558d0b3c5fa02e7e218b4b0c",\n' +
    '        "description": "James Bond 007 is on the search for a Russian decoding machine, known as Lektor. Bond needs to find this machine…",\n' +
    '        "actors": "Sean Connery, Daniela Bianchi, Pedro Armendáriz, Lotte Lenya",\n' +
    '        "director": "Terence Young",\n' +
    '        "genre": "Action, Adventure, Thriller",\n' +
    '        "imdbRating": "7.5",\n' +
    '        "trailer": "https://www.youtube.com/watch?v=D-BvAV6jYgU",\n' +
    '        "writers": "Richard Maibaum (screenplay), Johanna Harwood (adaptation)",\n' +
    '        "year": "1962-12-31T23:00:00.000Z",\n' +
    '        "likes":\n' +
    '        {\n' +
    '            "count": 29,\n' +
    '            "likedByUser": true\n' +
    '        }\n' +
    '}';
  exemple4: string = '{\n' +
    '    "_id": "558d0b395fa02e7e218b458c",\n' +
    '    "firstname": "Morgan",\n' +
    '    "lastname": "Haraki",\n' +
    '    "mutualFriends": 2\n' +
    '},\n' +
    '{\n' +
    '    "_id": "558d0b395fa02e7e218b4586",\n' +
    '    "firstname": "Fred",\n' +
    '    "lastname": "Farrid",\n' +
    '    "mutualFriends": 0\n' +
    '},\n' +
    '{\n' +
    '    "_id": "558d0b395fa02e7e218b4593",\n' +
    '    "firstname": "Jérôme",\n' +
    '    "lastname": "Lecomte",\n' +
    '    "mutualFriends": 23\n' +
    '}';
  insert: string = 'db.(nom collection).insert({attribut1: \'Quentin\', attribut2: \'Busuttil\'})';
  insertMany: string = 'db.(nom collection).insert([{attribut1: \'Quentin\', attribut2: \'Busuttil\'},{attribut1: \'Value1\', attribut2: \'Value2\'}])';
  selection1: string = 'db.contacts.find({condition},{projection},{options})';
  distinction1: string = 'db.contacts.distinct({condition},{projection},{options})';
  distinction2: string = 'db.contacts.distinct( "sizes" )';
  resultatDistinct: string = '[S, M, L]';
  selection: string = 'db.contacts.find({ attribut1: \'quentin\', attribut2: \'busuttil\' }).pretty()';
  removeAll: string = 'db.(nom collection).remove({condition})';
  effacerUn: string = 'db.(nom collection).remove({attribut1:\'Quentin\'})';
  mettreAJour: string = 'db.(nom collection).update({attribut1:x}, { $set: { "attribut2": "Nouveau Nom" }},{new:true, upsert:true})';
  mettreAJou3: string = 'db.(nom collection).updateMany({attribut1:x}, { $set: { "attribut2": "Nouveau Nom" } })';
  mettreAJou4: string = 'db.(nom collection).update({condition}, {remplacer avec}, {options})';
  mettreAJour2: string = 'db.(nom collection).update({ attribut1: \'x\' }, obj)';
  exempleDate: string = 'db.users.find({ signupDate: { $gte: ISODate("2015-09-15") } })';
  exempleDate2: string = 'db.users.find({ signupDate: { $gte: ISODate("2015-09-15T13:20:00.000Z") } })';
  exempleIndex1: string = 'db.users.createIndex({ username: 1 })';
  exempleIndex2: string = 'db.users.createIndex({ email: 1 }, { unique: true })';
  exempleIndex3: string = 'db.users.createIndex({ email: 1 }, { unique: true, sparse: true })';
  exempleIndex4: string = 'db.collection.getIndexes()';
  exempleIndex5: string = 'db.collection.dropIndex("indexName")';
  exempleIndex6: string = 'db.collection.dropIndexes()';
  exempleIndex7: string = 'db.getCollectionNames().forEach(function(collection) {\n' +
    '   db[collection].dropIndexes();\n' +
    '});';
  sortExemple1: string = 'db.(nom collection).find({condition}).sort({"attribut1": 1}).pretty()';
  sortExemple2: string = 'db.(nom collection).find({condition},{projection},{sort:{"attribut1": 1}}).pretty()';
  limitExample1: string = 'db.(nom collection).find({condition}).limit(5)';
  limitExample2: string = 'db.(nom collection).find({condition},{projection},{limit:5}).pretty()';
  criteresExemple: string = 'db.produits.find({dixmill:9999})';
  gt: string = 'db.(nom collection).find({année: {$gt:2012}}).pretty()';
  lt: string = 'db.(nom collection).find({année: {$lt:2012}}).pretty()';
  gte: string = 'db.(nom collection).find({année: {$gte:2012}}).pretty()';
  lte: string = 'db.(nom collection).find({année: {$lte:2012}}).pretty()';
  eg: string = 'db.(nom collection).find({année: {$eq:2012}}).pretty()';
  neg: string = 'db.(nom collection).find({année: {$ne:2012}}).pretty()';
  or: string = 'db.(nom collection).find({$or:[{année: 2012},{année:2013}]}).pretty()';
  and: string = 'db.(nom collection).find({$and:[{année: 2012},{couleur:rouge}]}).pretty()';
  not: string = 'db.(nom collection).find( { price: { $not: { $gt: 1.99 } } } ).pretty()';
  nor: string = 'db.(nom collection).find( { $nor: [ { price: 1.99 }, { sale: true } ]  } ).pretty()';
  inCritere: string = 'db.(nom collection).find({ language: { $in: [\'anglais\', \'francais\'] }).pretty()';
  ninCritere: string = 'db.(nom collection).find({ language: { $nin: [\'anglais\', \'francais\'] }).pretty()';
  exists: string = 'db.(nom collection).find({language: {$exists:true}}).pretty()';
  regex: string = 'db.(nom collection).find({telephone: {$regex:\'/789$/\'}}).pretty()';
  type: string = 'db.(nom collection).find({nom: {$type:"string"}}).pretty()';
  all: string = 'db.(nom collection).find({ tags: { $all: [\'ssl\', \'security\'] }).pretty()';
  size: string = 'db.(nom collection).find( { field: { $size: 3 } } ).pretty()';
  min: string = 'db.(nom collection).update( { nom: "Sarah" }, { $min: { score: 150 } } )';
  max: string = 'db.(nom collection).update( { nom: "Sarah" }, { $max: { score: 150 } } )';
  set: string = 'db.(nom collection).update( { nom: "Sarah" }, { $set: { score: 150 } } )';
  unset: string = 'db.(nom collection).update( { nom: "Sarah" }, { $unset: { prenom: 1 } } )';
  pop: string = 'db.(nom collection).update( { nom: "Sarah" }, { $pop: { notes: -1 } } )';
  pull: string = 'db.(nom collection).update( { }, { $pull: { fruits: { $in: [ "apples", "oranges" ] } } )';
  push: string = 'db.(nom collection).update( { nom: "Sarah" }, { $push: { notes: 17 } } )';
  addToSet: string = 'db.(nom collection).update( { nom: "Sarah" }, { $addToSet: { notes: 17 } } )';
  each: string = 'db.(nom collection).update( { nom: "Sarah" }, { $addToSet: { notes: { $each: [ 17, 18, 19 ] } } } )';
  allSimilar: string = 'db.(nom collection).find({ $and: [ { tags: "ssl" }, { tags: "security" } ] }).pretty()';
  aggExemple1: string = 'db.(nom collection).aggregate(pipeline, options)';
  matchExemple: string = '{$match : {} }';
  matchExemple1: string = 'db.pays.aggregate( [\n' +
    '    { $match : {\n' +
    '        "language":"Francais"\n' +
    '    }}\n' +
    '] )';
  projectExemple: string = '{$project : {} }';
  projectExemple2: string = 'db.pays.aggregate( [\n' +
    '    { $match : {\n' +
    '        "language":"Francais"\n' +
    '    }},\n' +
    '    { $project : {\n' +
    '        "nom":1, "location":1, "_id":0\n' +
    '    }}\n' +
    '] )';
  sortExemple: string = '{$sort : {} }';
  sortExemple3: string = 'db.pays.aggregate( [\n' +
    '    { $match : {\n' +
    '        "language":"Francais"\n' +
    '    }},\n' +
    '    { $project : {\n' +
    '        "nom":1, "location":1, "_id":0\n' +
    '    }}\n' +
    '     { $sort : {\n' +
    '            "nom":1"\n' +
    '       }}\n' +
    '] )';
  groupExemple1: string = '{$group : {} }';
  groupExemple2: string = 'db.produit.aggregate( [\n' +
    '    { $group : {\n' +
    '        "_id" : "reference" , "prix" : { $sum : 1 } \n' +
    '    }},\n' +
    '] )';
  groupExemple3: string = '' +
    '{"_id" : "produit 0",     "prix" : 27.0}\n' +
    '{"_id" : "produit 1",     "prix" : 7.0}\n' +
    '{"_id" : "produit 2",     "prix" : 83.0}\n' +
    '{"_id" : "produit 3",     "prix" : 56.0}\n' +
    '{"_id" : "produit 4",     "prix" : 47.0}';
  unwindExemple: string = '{$unwind : {} }  et {$sort : {} } ';
  unwindExemple2: string = 'varUnwind = {$unwind : "$matieres"}\n' +
    'varGroup4 = { $group : {"_id" : "$nom", "moyenne" : {$avg : "$matieres.note"} } };\n' +
    'varSort2 = { $sort : { "moyenne" : -1 } }\n' +
    'db.etudiants.aggregate( [ varUnwind, varGroup4, varSort2 ] );\n' +
    '\n' +
    '{ "_id" : "Sarah", "moyenne" : 11.634865110930088 }\n' +
    '{ "_id" : "Rabih", "moyenne" : 11.447723132969035 }\n' +
    '{ "_id" : "Farid", "moyenne" : 11.41823125728344 }\n' +
    '{ "_id" : "Lynn", "moyenne" : 11.370957711442786 }\n' +
    '{ "_id" : "Iman", "moyenne" : 11.036186099942562 }\n' +
    '{ "_id" : "Imad", "moyenne" : 9.632911392405063 }';
  limitExemple: string = '{$limit : nombre }';
  limitExemple2: string = 'varUnwind = {$unwind : "$matieres"}\n' +
    'varGroup4 = { $group : {"_id" : "$nom", "moyenne" : {$avg : "$matieres.note"} } };\n' +
    'varSort2 = { $sort : { "moyenne" : -1 } }\n' +
    'varLimit3 = { $limit : 3 }\n' +
    'db.etudiants.aggregate( [ varUnwind, varGroup4, varSort2 ] );\n' +
    '\n' +
    '{ "_id" : "Sarah", "moyenne" : 11.634865110930088 }\n' +
    '{ "_id" : "Rabih", "moyenne" : 11.447723132969035 }\n' +
    '{ "_id" : "Farid", "moyenne" : 11.41823125728344 }';

  skip: string = '{$skip: nombre }';
  skip2: string = 'varUnwind = {$unwind : "$matieres"}\n' +
    'varGroup4 = { $group : {"_id" : "$nom", "moyenne" : {$avg : "$matieres.note"} } };\n' +
    'varSort2 = { $sort : { "moyenne" : -1 } }\n' +
    'varlimit = { $limit: 3 }\n' +
    'varSkip = { $skip: 2 }\n' +
    'db.etudiants.aggregate( [ varUnwind, varGroup4, varSort2 ] );\n' +
    '\n' +
    '{ "_id" : "Farid", "moyenne" : 11.41823125728344 }\n' +
    '{ "_id" : "Lynn", "moyenne" : 11.370957711442786 }\n' +
    '{ "_id" : "Iman", "moyenne" : 11.036186099942562 }';

  lookup: string = '{$lookup:{ }}';
  lookupExemple: string = '{\n' +
    '   $lookup:\n' +
    '     {\n' +
    '       from: <collection to join>,\n' +
    '       localField: <field from the input documents>,\n' +
    '       foreignField: <field from the documents of the "from" collection>,\n' +
    '       as: <output array field>\n' +
    '     }\n' +
    '}';
  lookupExempleInsert1: string = 'db.orders.insert([\n' +
    '   { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },\n' +
    '   { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },\n' +
    '   { "_id" : 3  }\n' +
    '])';
  lookupExempleInsert2: string = 'db.inventory.insert([\n' +
    '   { "_id" : 1, "sku" : "almonds", description: "product 1", "instock" : 120 },\n' +
    '   { "_id" : 2, "sku" : "bread", description: "product 2", "instock" : 80 },\n' +
    '   { "_id" : 3, "sku" : "cashews", description: "product 3", "instock" : 60 },\n' +
    '   { "_id" : 4, "sku" : "pecans", description: "product 4", "instock" : 70 },\n' +
    '   { "_id" : 5, "sku": null, description: "Incomplete" },\n' +
    '   { "_id" : 6 }\n' +
    '])';
  lookupExemple2: string = 'db.orders.aggregate([\n' +
    '   {\n' +
    '     $lookup:\n' +
    '       {\n' +
    '         from: "inventory",\n' +
    '         localField: "item",\n' +
    '         foreignField: "sku",\n' +
    '         as: "inventory_docs"\n' +
    '       }\n' +
    '  }\n' +
    '])';
  lookupExemple3: string = '{\n' +
    '   "_id" : 1,\n' +
    '   "item" : "almonds",\n' +
    '   "price" : 12,\n' +
    '   "quantity" : 2,\n' +
    '   "inventory_docs" : [\n' +
    '      { "_id" : 1, "sku" : "almonds", "description" : "product 1", "instock" : 120 }\n' +
    '   ]\n' +
    '}\n' +
    '{\n' +
    '   "_id" : 2,\n' +
    '   "item" : "pecans",\n' +
    '   "price" : 20,\n' +
    '   "quantity" : 1,\n' +
    '   "inventory_docs" : [\n' +
    '      { "_id" : 4, "sku" : "pecans", "description" : "product 4", "instock" : 70 }\n' +
    '   ]\n' +
    '}\n' +
    '{\n' +
    '   "_id" : 3,\n' +
    '   "inventory_docs" : [\n' +
    '      { "_id" : 5, "sku" : null, "description" : "Incomplete" },\n' +
    '      { "_id" : 6 }\n' +
    '   ]\n' +
    '}';
  sumExemple: string = 'db.(nom collection).aggregate([{$group : {_id : "$nom", num_tutorial : {$sum : "$likes"}}}])';
  avgExemple: string = 'db.(nom collection).aggregate([{$group : {_id : "$nom", num_tutorial : {$avg : "$likes"}}}])';
  minExemple: string = 'db.(nom collection).aggregate([{$group : {_id : "$nom", num_tutorial : {$min : "$likes"}}}])';
  maxExemple: string = 'db.(nom collection).aggregate([{$group : {_id : "$nom", num_tutorial : {$max : "$likes"}}}])';
  pushExemple: string = 'db.(nom collection).aggregate([{$group : {_id : "$nom", notes : {$push : "$notes"}}}])';
  addToSetExemple: string = 'db.(nom collection).aggregate([{$group : {_id : "$nom", notes : {$addToSet : "$notes"}}}])';
  admin1: string = 'En outre, il est également possible d’utiliser la commande db.runCommand( { usersInfo: { forAllDBs: true } } )\n' +
    '          afin de lister tous les utilisateurs depuis n’importe quelle base.';
  relation1: string = '{\n' +
    '   "_id":ObjectId("52ffc33cd85242f436000001"),\n' +
    '   "name": "Tom Hanks",\n' +
    '   "contact": "987654321",\n' +
    '   "dob": "01-01-1991"\n' +
    '}';
  relation2: string = '{\n' +
    '   "_id":ObjectId("52ffc4a5d85242602e000000"),\n' +
    '   "building": "22 A, Indiana Apt",\n' +
    '   "pincode": 123456,\n' +
    '   "city": "Los Angeles",\n' +
    '   "state": "California"\n' +
    '} ';
  relation3: string = '{\n' +
    '   "_id":ObjectId("52ffc33cd85242f436000001"),\n' +
    '   "contact": "987654321",\n' +
    '   "dob": "01-01-1991",\n' +
    '   "name": "Tom Benzamin",\n' +
    '   "address": [\n' +
    '      {\n' +
    '         "building": "22 A, Indiana Apt",\n' +
    '         "pincode": 123456,\n' +
    '         "city": "Los Angeles",\n' +
    '         "state": "California"\n' +
    '      },\n' +
    '      {\n' +
    '         "building": "170 A, Acropolis Apt",\n' +
    '         "pincode": 456789,\n' +
    '         "city": "Chicago",\n' +
    '         "state": "Illinois"\n' +
    '      }\n' +
    '   ]\n' +
    '} ';
  relation4: string = '>db.users.findOne({"name":"Tom Benzamin"},{"address":1})';
  relation5: string = '{\n' +
    '   "_id":ObjectId("52ffc33cd85242f436000001"),\n' +
    '   "contact": "987654321",\n' +
    '   "dob": "01-01-1991",\n' +
    '   "name": "Tom Benzamin",\n' +
    '   "address_ids": [\n' +
    '      ObjectId("52ffc4a5d85242602e000000"),\n' +
    '      ObjectId("52ffc4a5d85242602e000001")\n' +
    '   ]\n' +
    '}';
  relation6: string = '>var result = db.users.findOne({"name":"Tom Benzamin"},{"address_ids":1})';
  relation7: string = '>var addresses = db.address.find({"_id":{"$in":result["address_ids"]}})';
  createDB = 'db.createCollection("Nom Collection")';
  renommerColl = 'db.(nom collection).renameCollection("nouveau nom")';

  constructor() {
  }

  ngOnInit() {
    console.log('tutorial here');
  }

  onChangeSection(section) {
    window.scrollTo(0, 0);
    this.route = section.route;
    console.log('routee', this.route);
  }
}
