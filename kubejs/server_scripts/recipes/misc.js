// This script is for mods that are too little for their own JS file.
ServerEvents.recipes(e => {
    // Event Vars
    let shapeless = e.shapeless
    let custom = e.custom

    // Item Vars
    let paper = 'minecraft:paper'

    // Backpacks Mod
    e.remove({output: 'sophisticatedbackpacks:everlasting_upgrade'})
    e.remove({output: 'sophisticatedbackpacks:magnet_upgrade'})


    // Modded Recipes for Minecraft Items
    e.remove({id: 'create:crafting/appliances/slime_ball'})

    shapeless(
        Item.of('minecraft:slime_ball'),
            [
                '#forge:dough',
                'gtceu:plant_ball'
            ]
    )


    // Silent Gear
    e.remove({output: 'silentgear:blueprint_paper'})


    shapeless(
        Item.of('silentgear:blueprint_paper', 2),
            [
                Item.of(paper, 4),
                'gtceu:chemical_blue_dye'
            ]
    )
})

/*
    // Gregging
GTCEuServerEvents.recipe(e => {
    e.builder('polarizer', 'backpack_magnet_upgrade')
        .inputItem('sophisticatedbackpacks:upgrade_base')
        .outputItem('sophisticatedbackpacks:magnet_upgrade')
        


})
*/