# awesome-botpress-messenger-tricks-howtos
Some how-tos, best practices and tricks when working with botpress

# Why this repo?
There are plenty 'how-to'request (in the slack group) so I decided to create a repo that hold everything. The aim of this repo
is to serve as the quick reference on how to implement anything the developer is not clear on without necessarily reading through
a long tutorial just for a few lines of code.

## ISSUES

###### Specified router not working on heroku
So after I deployed my bot to heroku, the router I specified (see sample code in Server/Expose.js) stopped working. I solved this by using the [botpress webhook module]('https://github.com/botpress/botpress-webhook'). Perhaps this is an issue with botpress, I am yet to figure out, yet to check it out in the core. Perhaps [Botpress X]('https://github.com/botpress/botpress/tree/develop/x-merged') would fix that...
The error I get from Heroku was a `401` error. This is a good clue incase anybody wants to figure it out.

## HOW-TOs

###### How to listen for Quick reply buttons/Location buttons in a convo thread?

Simply set the `convo.messageTypes` to an array containing whatever message/event type you want to listen for. Check out the code snippet example [here]('https://github.com/OAyomide/awesome-botpress-messenger-tricks-howtos/Convo/LocationButton.js')

###### Pull requests are definitely welcome

