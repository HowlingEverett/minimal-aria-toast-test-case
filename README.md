# NGX Toastr Angular Aria Test Case

This is a minimal reproduction of our use of ngx-toastr in Angular, to test its aria-live behaviour in VoiceOver in Chrome.

To run the server and test the toast:

1. Install dependencies with `npm install`
2. Start the webpack server with `npm start`
3. Visit http://localhost:4200 in Chrome
4. Start VoiceOver
5. Click the 'Show test toast' button

The toast will display (in a mangled way, I haven't bothered to fix the styles other than to make sure they aren't interfering e.g. animations work), and you should hear the content of the test toast read aloud by VoiceOver.
