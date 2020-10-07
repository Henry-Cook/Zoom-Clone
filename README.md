# Zoom Clone
This is a full-stack video chat app built in the MERN stack made to resemble Zoom.

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)

<br>

## Overview

This is Video Chat Web App. It will allow users to create rooms, create invite links, and chat using webRTC. It was built using the MERN stack.


## MVP

* User Authentication
* Video Confrencing Capability
  * Ability to Mute/Go off Camera
  * Button for pop-up with meeting invite link
* Styled to look like Zoom
* Atleast three tables created
* Complete Deploy

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _The front end framework used._ |
|   React Router   | _A package used to simulate routing on the front end._ |
|     Express      | _The Node framework used to create the backend functions._ |
|     Socket.io      | _Allows us to keep a channel open with the server._ |
|     Peer.js      | _A webRTC frame work, this is what is used to create the actual video calls._ |


### Client (Front End)

#### Component Tree

![Component Tree](https://github.com/Henry-Cook/Full-Stack-Video-Chat/blob/main/Zoom%20Clone.png?raw=true)

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Login    | functional |   Y   |   Y   | _Allows exsisting users to login._               |
|  Signup  | functional |   Y   |   Y   | _Allows new users to signup._       |
|   Buttons    |   functional    |   N   |   Y   | _These are the main navigation buttons to either create a new room or join one._      |
| Invite Link | functional |   Y   |   Y   | _A model that will pop up and allow user to copy a link to send to a friend._                 |
|    Settings Bar    | functional |   N   |   Y   | _In room settings, right now only two: Mute, and Turn off Camera._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


