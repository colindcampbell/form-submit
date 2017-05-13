# Nuance Automated Solutions Candidate Assessment

### Introduction

Thank you for taking the time to complete this candidate assessment. Please read through this entire README before attempting to complete the assignment. The following exercise is meant to test your knowledge of HTML, CSS, and Javascript, and to give you a better idea of the type of work you will be doing at Nuance.

NOTE: Please rename ./js/index.js.txt to ./js/index.js

### Directions

The designers at Nuance have provided you with mockups for a new pre-chat survey. This survey is intended to collect necessary information from the user prior to connecting to a chat agent. The client would like to obtain the user's full name, phone number, state, and a description of their question. All four fields are required, meaning that if they are not filled out upon form submission, the form will not submit. Additionally, the phone number must be a valid phone format. If the phone number does not follow one of the required patterns, a message should be displayed next to the input's label stating that the phone number is invalid (as seen in figure 11). 

Your goal is to recreate the survey as seen in the mockups using your knowledge of HTML, CSS, and Javascript. Your work should be completed in the ./index.html, ./css/main.css, and ./js/index.js files. Please refer to the images located in the ./mockups/ directory for guidelines on what the survey should look like.

| Image Name    | Explanation
| ----------    | -----------
| figure_1.png  | This is the normal state. No user interaction has occured on the form.
| figure_2.png  | The user focuses on the "full_name" input.
| figure_3.png  | The user enters "Aubrey Graham" into the "full_name" input.
| figure_4.png  | The user focuss on the "phone_number" input.
| figure_5.png  | The user enters "12345" into the "phone_number" input.
| figure_6.png  | The user focuses on the "state" input.
| figure_7.png  | The user selects "California" from the "state" input.
| figure_8.png  | The user focuses on the "question" input.
| figure_9.png  | The user enters "What exactly is lorem ipsum?" into the "question" input.
| figure_10.png | The user hovers over and clicks on the submit button.
| figure_11.png | The "phone_number" field is invalid and displays an error message.
| figure_12.png | The user enters "(123) 456-7890" into the "phone_number" field.
| figure_13.png | The user hovers over and clicks on the submit button.
| figure_14.png | The form successfully validates and submits, and a success message is displayed.

Please refer to the following table when building the field validation on form submission.

| Field Name   | Field Type | Validation Type | Accepted Values                          | Error Message        | Required |
| ------------ | ---------- | --------------- | ---------------------------------------- | -------------------- | -------- |
| full_name    | input      | None            |                                          |                      | Yes      |
| phone_number | input      | Pattern         | 8881234567, (888) 123-4567, 888-123-4567 | invalid phone number | Yes      |
| state        | select     | None            |                                          |                      | Yes      |
| question     | textarea   | None            |                                          |                      | Yes      |

### Assets

Font: sans-serif
Nuance Logo: ./images/logo.png
Header background color: #333
Header border color: #1a6b96
Close button: &times;
Input border color: #ccc
Footer background color: #ccc

### Assessment Submission

To submit your work, please provide a link to a git repository (for example, Github, Bitbucket, or Gitlab).