# RandomFactsAPI
<img width="200px" src="https://cdn-icons-png.flaticon.com/512/246/246569.png"/>

RandomFacts is an application programming interface build with Node.js, Express and MongoDB, made with CRUD operations in mind.
<br>
You can get facts about different topics and subtopics.
<br>
<br>
Topics available: Sports and science 
<br>
<br>
Subtopics available: Football, basketball, olympics, space, humans, animals, stats
<br>
<br>
RandomFacts is fully deployed, try it with this url: https://randomfacts-api.herokuapp.com/
<br>
<br>
This API is also deployed and available in RapidAPI: https://rapidapi.com/brianweidl/api/random-facts4/

<br>


Check the endpoints down below!


##  Request & Response 

###  API Resources

- [POST /post ](#post-post)

- [GET / ](#get-)

- [GET /topic/ ](#get-topictopic)

- [GET /subtopic/ ](#get-subtopicsubtopic)

- [PUT /update ](#put-updateid)

- [DELETE / ](#delete-deleteid)

- [DELETE /topic/ ](#delete-deletetopictopic)

- [DELETE /subtopic/ ](#delete-deletesubtopicsubtopic)

###  POST /post

Example: http://localhost:4000/post/
Request Body: 

    {
    "description": "Fact Example",
    "topic": "abc",
    "subtopic": "def"
    }

(The request body can also be an array of objects)



###  GET /

Example: http://localhost:4000/get/

Response body:

    [
    {"description":"An estimated 3.5 billion people watched the 2018 FIFA World Cup Final",
    "topic":"sports",
    "subtopic":"football"}
    ]


###  GET /topic/[topic]

Example: http://localhost:4000/get/topic/sports?count=3

Response body:

    [
    {    
    "description": "The youngest Olympian in the modern era is Greek gymnast Dimitrios Loundras, who competed in the 1896 Athens Olympics at the age of 10",
    "topic": "sports",
    "subtopic": "olympics"    
    },    
    {
    "description": "The three-point shot has not always been a part of the basketball game. It was just added in the 1979 to 1980 season when the NBA adjusted its rules",    
    "topic": "sports",    
    "subtopic": "basketball"    
    },    
    {
		"description": "Zinedine Zidane was never caught in an offside position in his whole career",
		"topic": "sports",
		"subtopic": "football"
	  }  
    ]

###  GET /subtopic/[subtopic]

Example: http://localhost:4000/get/subtopic/humans?count=3
Response body:

    [
    {
    "description": "There is anywhere between 60,000-100,000 miles of blood vessels in the human body. If they were taken out and laid end-to-end, they would be long enough to travel around the world more than three times",
    "topic": "science",
    "subtopic": "humans"
    },
    {
    "description": "Fingernails grow up to 4 times faster than toenails",
    "topic": "science",
    "subtopic": "humans"
    },
    {
    "description": "The highest blood flow isn’t in your heart, liver, or brain — it’s in your kidneys. That’s because kidneys are the body’s natural filtration system",
    "topic": "science",
    "subtopic": "humans"
    }
    ]


###  PUT /update/[id]

Example: http://localhost:4000/update/6244ab01251005b178b145e8
Request Body:

     {
        "description": "Update Example",
        "topic": "abc",
        "subtopic": "def"
        }
(Not all properties are needed)

###  DELETE /delete/[id]

Example: http://localhost:4000/delete/6244aa6a83af3ec85140f507

###  DELETE /delete/topic/[topic]

Example: http://localhost:4000/delete/topic/sports

###  DELETE /delete/subtopic/[subtopic]

Example: http://localhost:4000/delete/subtopic/football


Response for Delete operations:

    Deleted Documents: <integer>

<br>
<br>
Thanks for reading and hope you enjoy the RandomFacts API!
