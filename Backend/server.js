let Event = require('./event.model');
const express = require('express');
const router = require('express').Router();
const app = express();
const cors = require('cors');
const mongoose=require("mongoose");
require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(express.static("public"));
app.use(cors({origin: true, credentials: true}));


app.get("/",(req, res) => {
    Event.find({},function(err,post){
        if(err){
            console.log(err)
        }
        else
        res.json(post)
         })
        })

    app.post("/",function(req,res){
        const event1=Event({

            name:"NBA 2K20t",
            description:"This basketball simulation game, based on the National Basketball Association, is published by 2K Sports. It’s the 21st installment in the NBA 2K franchise, after (you guessed it) NBA 2K19.Come join at the biggest ever tournament online",
            img:"https://cdn.pixabay.com/photo/2016/05/20/21/57/football-1406106_1280.jpg",
            date:"06 Nov,2020",
            time:"6:00 PM IST"
        })
        const event2=Event({
    
            name:"Call of Duty: Modern Warfare",
            description:"Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it focusses on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.",
            img:"https://wallpapercave.com/wp/wp4517150.jpg",
            date:"07 Nov,2020",
            time:"6:30 PM IST"
        
        })
          const event3=Event({
            name:"World of Warcraft",
            description:"World of Warcraft is one of the longest-running and most popular massively multiplayer online role-playing games (MMORPGs) around. It’s seen spin-off card games, movies, and novels too.Like most MMOs, World of Warcraft begins with you choosing your character race - from humans, orcs, elves, and pandas or pandaren as the game calls them. Then you select your character class, ranging from the usual ranged sorts like the mage and the hunter to the damage-dealing variety such as the paladin and the warrior. Certain classes like the druid — which lets you transform into a cat — and bear are limited to specific races like the night elf, troll, tauren, or worgen.",
            img:"https://lh3.googleusercontent.com/proxy/joXDVonSz7XxOGyl6iMmoNNAe9A5MpB-4vnMJBZE3oXEEU6dsOkAU6_ThNcMlpg0zVg5c5Exq-oz4w52lPxT9SoixzRP2mJsvI6MmqRH7YGqn6-WWP5t8d6CPYca1MTxIcHVQZ2Bfua7CzPYlD9mXVv-mQ5YnkMVxWeFhkw",
            date:"08 Nov,2020",
            time:"7:00 PM IST"
        })
        const event4=Event({
            name:"Chess",
            description:"The game involving the age old battle of minds.Come challenge yourself to a hearty,puzzling game chess.Beat your opponents nad win amazing prizes!!",
            img:"https://cdn.pixabay.com/photo/2016/09/29/12/54/chess-1702761_1280.jpg",
            date:"08 Nov,2020",
            time:"8:00 PM IST"
        })
        const event5=Event({
            name:"Poker",
            description:"Typically, the winner of each hand of poker is the player that holds the highest ranked hand when all cards are shown at the end of the hand – known as the ‘showdown’ – or the player that makes the last uncalled bet, thus winning without needing to reach a showdown.Not sure whether a flush beats a straight? Can’t remember how to make a full house? You can find all the information you need to know about hand rankings in the table below. The strongest hands are in the top row, running from left to right, with the weakest possible hand being simply a high card.",
            img:"https://i.redd.it/vywnd9fvlvm21.jpg",
            date:"09 Nov,2020",
            time:"7:00 PM IST"
        
        })
        Event.insertMany([event1,event2,event3,event4,event5]).then(Event => {
            res.status(200).json(Event);
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
    })
   






    



//  .then(() => res.json('Blog added!'))
//  .catch(err => res.status(400).json('Error: ' + err));
   

    


app.listen(5000, () => {
    console.log(`Server is running on port: 5000`);
});