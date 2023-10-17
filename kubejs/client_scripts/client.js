// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

REIEvents.groupEntries(e => {
    // e.groupItemsByTag('gtceu:rei_groups/')
       e.groupItemsByTag('gtceu:rei_groups/crushed_ores', 'Crushed Ores', 'forge:crushed_ores')
       
       e.groupItems('gtceu:rei_groups/item_pipe', 'Item Pipes', [
        /gtceu:.*_item_pipe$/
       ])


})