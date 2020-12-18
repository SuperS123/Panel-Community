# ControlPanel.gg
ControlPanel is a panel for managing games, apis, voice servers, and much more! 

## Features
- Audit Log 
- Public API 
- Admin Dashboard
- Minecraft Plugin Manager
- Online File Manager 
- Auto Server Deletion 
- Domain Linking (Reverse Proxy) 
- Migration Tool 
- so much more... 

## Cost
- Community ($0.00)
-  Business ($10/month or $5/month) 

## FAQ

Q: Will I be able to migrate from Pterodactyl 1.0 

Yes! We are working on a migration script that will take advantage of pterodactyl's v1.0 api!

## Setup

**Directory**

Navigate to the panel UI using the console
```bash
cd <panel-directory>/src/modules/Panel
```

**Development Build**

Then in console type this command to run
```bash
npm run serve
```

**Production Build**

To build to production
```bash
npm run build
```

To run it you have to run these commands
```bash
npm i -g serve
serve -s dist
```
