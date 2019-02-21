import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  route: string;
  exemple1: string = '{nom: "Her", acteurs : [{nom:"Johansson", prenom:"Scarlett"}, {nom:"Phoenix", prenom:"Joaquim"}]}';
  exemple2: string = '{nom: "Avengers", acteurs : [{nom:"Johansson", prenom:"Scarlett"}]}';
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
    '        "count": 29,\n' +
    '        "likedByUser": true\n' +
    '        }\n' +
    '        }';
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
  selection: string = 'db.contacts.find({ attribut1: \'quentin\', attribut2: \'busuttil\' })';
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
  sortExemple1: string = 'db.(nom collection).find({condition}).sort({"attribut1":1}).pretty()';
  sortExemple2: string = 'db.(nom collection).find({condition},{projection},{sort:{"attribut1":1}}).pretty()';
  limitExample1: string = 'db.(nom collection).find({condition}).limit(5)';
  limitExample2: string = 'db.(nom collection).find({condition},{projection},{limit:5}).pretty()';
  criteresExemple: string = 'db.produits.find({dixmill:9999})';
  gt: string = 'db.(nom collection).find({année:{$gt:2012}}).pretty()';
  lt: string = 'db.(nom collection).find({année:{$lt:2012}}).pretty()';
  gte: string = 'db.(nom collection).find({année:{$gte:2012}}).pretty()';
  lte: string = 'db.(nom collection).find({année:{$lte:2012}}).pretty()';
  or: string = 'db.(nom collection).find({$or:[{année:2012},{année:2013}]}).pretty()';
  and: string = 'db.(nom collection).find({$and:[{année:2012},{couleur:rouge}]}).pretty()';
  inCritere: string = 'db.(nom collection).find({ language: { $in: [\'anglais\', \'francais\'] }).pretty()';
  exists: string = 'db.(nom collection).find({language:{$exists:true}}).pretty()';
  regex: string = 'db.(nom collection).find({telephone:{$regex:\'/789$/\'}}).pretty()';
  type: string = 'db.(nom collection).find({nom:{$type:"string"}}).pretty()';
  all: string = 'db.(nom collection).find({ tags: { $all: [\'ssl\', \'security\'] }).pretty()';
  allSimilar: string = 'db.(nom collection).find({ $and: [ { tags: "ssl" }, { tags: "security" } ] }).pretty()';

  constructor() {
  }

  ngOnInit() {
    console.log('tutorial here');
  }

  onChangeSection(section) {
    this.route = section.route;
    console.log('routee', this.route);
  }
}
