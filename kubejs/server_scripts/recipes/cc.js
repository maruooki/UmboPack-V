ServerEvents.recipes(e => {
    e.remove({output: 'computercraft:computer_normal'})
    e.remove({output: 'computercraft:cable'})

    e.shapeless(
        Item.of('computercraft:cable', 4),
        [
            'morered:bundled_network_cable',
            'gtceu:rubber_plate'
        ]
    )
})