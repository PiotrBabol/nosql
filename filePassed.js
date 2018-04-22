use films
db.films.find("director.last_name" : "Scott"}).pretty()

var directors = db.director.find()

cursor = db.film.find()
while(cursor.hasNext()){
	printjson(cursor.next()) //.director
}

db.films.aggregate([{$group:{_id:'$year',filmPerYear:{$sum:1}}}])