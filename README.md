# FLL Tools

Needs nodejs 14 installed

## Running 
Ionic server: `ionic serve` or `ionic build` after the npm install lines in build

## Web build instructions 
Download and install nodejs v14 for your distribution (e.g. https://computingforgeeks.com/install-node-js-14-on-ubuntu-debian-linux-mint/) or https://nodejs.org/en/download 
```
npm install -g ionic
npm install
npm install @ionic/angular@6.7.5
ionic build 
cp www/index.html www/404.html
cp -r translator www/
```
Use `cd www; python3 -m http.server` to host a testing server

## App build instruction

See ionic v6 docs: https://ionic-docs-o31kiyk8l-ionic1.vercel.app/docs/v6 
