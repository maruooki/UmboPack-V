ServerEvents.recipes(e => {

    e.remove({output: 'natprog:flint_hatchet'})
    e.shaped(
        Item.of('natprog:flint_hatchet'),
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

})