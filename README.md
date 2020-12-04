# antarctica

## Introduction

This is my solution for the Test Automation Engineer Assignment, that I've spent last days (mostly evenings on). Prior to this, I've never worked with Google logins, GMail so I learned a lot, and yes, at times it was quite challenging! :)


## Solution

At first, I had all three steps run separately in three browsers, but since a lot of the time goes into waiting for the notification email to arrive, I disbanded this approach as I didn't think it was wise to hurry to waiting. Now steps are done in order and changing users on the go, to help to validate that the test is testing the actions done during the actual test run, the t.ctx.currentTestId is used to help validating the process flow.

I decided to use Testcafé as framework, which I introduced myself earlier this year. I am not expert on it yet, but as I want to move from Robot Framework keyword "coding" toward JScript proper coded tests, I wanted to use this framework. So bear in mind, that I am not YET a JS wizard :)

## Testcafé

https://devexpress.github.io/testcafe/

Installing instructions

- clone this git repo locally
- `npm install testcafe --save-dev` (should install all dependcies (faker.JS))
- copy a local credentials.json file from credentials.json.example and add all the credentials and login_url and app landing page url (base_url) into the configs
- run tests f.e ith `testcafe chrome src/fixtures/postArticle.ts

Please note, that for the tests to work, the R2D2 email box must remain in HTML mode by default!

Have Fun!

### Final words

Thank you once again for considering myself as a candidate for this role. Even if you don't find my Test Automtion skills convincing based on this assignment, I'd like to hear the feedback how I can improve!

Cheers!