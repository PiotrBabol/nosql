mongo
use films
db.films.find({"director.last_name" : "Scott"}).pretty()


db.films.aggregate([{$group:{_id:'$year',filmPerYear:{$sum:1}}}])