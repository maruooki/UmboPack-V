ServerEvents.recipes(e => {

    e.remove({output: '#survivalistessentials:knife_tools'})
    e.remove({output: '#survivalistessentials:axe_tools'})
    e.shaped(
        Item.of('survivalistessentials:crude_hatchet'),
        [
            'AB ',
            'AC ',
            '   '
        ],
        {
            A: 'minecraft:flint',
            B: 'farmersdelight:straw',
            C: '#forge:rods/wooden'
        }
    )
    // Remove any Instance of SE's Plant Fiber
    e.replaceInput(
        {mod: 'survivalistessentials'}, // Arg 1: the filter
        'survivalistessentials:plant_fiber',            // Arg 2: the item to replace
        'farmersdelight:straw'         // Arg 3: the item to replace it with
      )

})