# BackendDevelopmentExercise
## Table of contents
* [General info](#general-info)
* [Description](#description)
* [Setup](#setup)

## General info
This project implement Tweets RESTful API using Express (Node.Js), PostgreSQL, Sequelize, Docker and Docker Compose. The client can post tweets, like a tweet, retweet, get all tweets or get all retweet. 

## Description
Description for each file:

### models:

  * Tweet - Tweet model fields are textContent, username, timestamp
  * Like - Like model fields are username, TweetId(belongsTo Relation), timestamp
  * ReTweet - ReTweet model fields are username, TweetId(belongsTo Relation), timestamp
  
### controller:
  * tweetController - tweetController func are: create tweet in db, find all tweets, validate fields when creating tweet
  * likeController - likeController func are: create like, validate fields when creating like
  * retweetController - retweetController func are: create retweet in db, find all retweets, validate fields when creating retweet
  
### routes:
  * tweets - tweets routs are:
    * GET /tweets - Get all tweets
    * POST /tweets - Post tweet
    * POST /tweets/[:id]/likes - Create like to a tweet by tweet id
    * POST /tweets/[:id]/retweet - Create retweet to a tweet by tweet id
  
  * retweets - tweets routs are:
    * GET /retweets - Get all retweets

### Additional files:
  * server - Create tables if needed and run server
  * db - Create Sequelize ORM, define models relations (connect to db)
  * Dockerfile - Dockerfile for app
  * docker-compose -  Docker compose file to run multi-container microservice applications.


## Setup
To build and run project (after installation):

* Navigate (in a terminal) into the ~/BackendDevelopmentExercise folder.
* Run ```docker-compose build``` for your first build and when you have made changes.
* Run ```docker-compose up``` to run all the services.
