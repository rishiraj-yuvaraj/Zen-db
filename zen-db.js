// mongosh
// show dbs
// use zen-db

 db.zendata.insertMany([
    {
    "id" : 1,
    "date" : "15-oct-2020",
    "user" : "Rishi",
    "codekata" : 20,
    "attendance" : "present",
    "topic" : "react",
    "task" : "react task",
    "company_drives": "TCS",
    "mentor" : {
        "name" : "Rupesh",
        "mentees_count" : 20
    },
    },
    {
    "id" : 2,
    "date" : "16-oct-2020",
    "user" : "Rakesh",
    "codekata" : 25,
    "attendance" : "present",
    "topic" : "react",
    "task" : "react task",
    "company_drives": "Zoho",
    "mentor" : {"name" : "Rupesh",
    "mentees_count" : 10},
    },
    {
    "id" : 3,
    "date" : "17-oct-2020",
    "user" : "Lohini",
    "codekata" : 25,
    "attendance" : "present",
    "topic" : "react",
    "task" : "react task",
    "company_drives": "Wipro",
    "mentor" : {"name" : "Rupesh",
    "mentees_count" : 15},
    },
    {
    "id" : 4,
    "date" : "18-oct-2020",
    "user" : "Athira",
    "codekata" : 20,
    "attendance" : "present",
    "topic" : "react",
    "task" : "react task",
    "company_drives": "TVS",
    "mentor" : {"name" : "Rupesh",
    "mentees_count" : 17},
    },
    {
    "id" : 5,
    "date" : "19-oct-2020",
    "user" : "Rishi",
    "codekata" : 30,
    "attendance" : "absent",
    "topic" : "js",
    "task" : "js task",
    "company_drives": "Cognizant",
    "mentor" : {"name" : "Eshwar",
    "mentees_count" : 20},
    },
    {
    "id" : 6,
    "date" : "20-oct-2020",
    "user" : "Rakesh",
    "codekata" : 34,
    "attendance" : "present",
    "topic" : "js",
    "task" : "js task",
    "company_drives" : "Zoho",
    "mentor" : {"name" : "Eshwar",
    "mentees_count" : 16},
    },
    {
    "id" : 7,
    "date" : "21-oct-2020",
    "user" : "Lohini",
    "codekata" : 35,
    "attendance" : "absent",
    "topic" : "html",
    "task" : "html task",
    "company_drives": "HCL",
    "mentor" : {"name" : "Raghav",
    "mentees_count" : 15},
    },
    {
    "id" : 8,
    "date" : "22-oct-2020",
    "user" : "Athira",
    "codekata" : 35,
    "attendance" : "absent",
    "topic" : "html",
    "task" : "pending",
    "company_drives": "HCL",
    "mentor" : {"name" : "Raghav",
    "mentees_count" : 19},
    },
    {
    "id" : 9,
    "date" : "23-oct-2020",
    "user" : "Rishi",
    "codekata" : 45,
    "attendance" : "present",
    "topic" : "css",
    "task" : "pending",
    "company_drives": "Amazon",
    "mentor" : {"name" : "Raghav",
    "mentees_count" : 20},
    },
    {
    "id" : 10,
    "date" : "24-oct-2020",
    "user" : "Rakesh",
    "codekata" : 40,
    "attendance" : "absent",
    "topic" : "mongodb",
    "task" : "pending",
    "company_drives": "Google",
    "mentor" : {"name" : "Raghav",
    "mentees_count" : 21},
    },
    {
    "id" : 11,
    "date" : "25-oct-2020",
    "user" : "Lohini",
    "codekata" : 50,
    "attendance" : "absent",
    "topic" : "mongodb",
    "task" : "pending",
    "company_drives": "Amazon",
    "mentor" : {"name" : "Raghav",
    "mentees_count" : 15},
    },
    {
    "id" : 12,
    "date" : "26-oct-2020",
    "user" : "Athira",
    "codekata" : 49,
    "attendance" : "present",
    "topic" : "node",
    "task" : "node task",
    "company_drives": "flipkart",
    "mentor" : {"name" : "Raghav",
    "mentees_count" : 11},
    },
    {
    "id" : 13,
    "date" : "27-oct-2020",
    "user" : "Rishi",
    "codekata" : 60,
    "attendance" : "present",
    "topic" : "node",
    "task" : "node task",
    "company_drives": "css corp",
    "mentor" : {"name" : "Raghav",
    "mentees_count" : 25},
    },
    {
    "id" : 14,
    "date" : "28-oct-2020",
    "user" : "Rakesh",
    "codekata" : 55,
    "attendance" : "absent",
    "topic" : "data_structure",
    "task" : "pending",
    "company_drives": "fss",
    "mentor" : {"name" : "Vidhya",
    "mentees_count" : 19},
    },
    {
    "id" : 15,
    "date" : "29-oct-2020",
    "user" : "Lohini",
    "codekata" : 55,
    "attendance" : "absent",
    "topic" : "redux",
    "task" : "pending",
    "company_drives": "Google",
    "mentor" : {"name" : "Vidhya",
    "mentees_count" : 20},
    },
    {
    "id" : 16,
    "date" : "30-oct-2020",
    "user" : "Athira",
    "codekata" : 60,
    "attendance" : "absent",
    "topic" : "css",
    "task" : "css task",
    "company_drives": "Zoho",
    "mentor" : {"name" : "Vidhya",
    "mentees_count" : 18},
    },
    {
    "id" : 17,
    "date" : "31-oct-2020",
    "user" : "Rishi",
    "codekata" : 63,
    "attendance" : "Present",
    "topic" : "js",
    "task" : "js task",
    "company_drives": "Amazon",
    "mentor" : {"name" : "Vidhya",
    "mentees_count" : 14},
    },
    ])

//Day - 31 TASK

// 1.Find all the topics and tasks which are thought in the month of October
db.zendata.find({}, {_id : 0, topic: 1, task:1});

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zendata.find({}, {_id : 0, company_drives : 1}); //taken only Oct month data so no need to filter month

// 3.Find all the company drives and students who are appeared for the placement.
db.zendata.find({}, {_id : 0, company_drives : 1, user : 1});

// 4.Find the number of problems solved by the user in codekata
db.zendata.find({}, {_id : 0, user: 1, codekata : 1});

// 5.Find all the mentors with who has the mentee's count more than 15
db.zendata.aggregate([
    {$match : {mentor : {name : "Vidhya"}}},
    {$group : {mentees_count : {$gt : "15"}}}
])

// db.zendata.find({}, {mentor : {mentees_count : {$gt : 15}}}); //alternate method

// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zendata.aggregate([
    {
        $match : {attendance : "absent", task : "pending"}
    }
]);
