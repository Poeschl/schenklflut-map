import { bootstrapExtra } from "@workadventure/scripting-api-extra";

WA.onInit().then(() => {
  console.log('WorkAdventure API Extra ready');

  bootstrapExtra().then(() => {
    console.log('Scripting API Extra ready');
  }).catch(e => console.error(e));

  //Setup map
  
});