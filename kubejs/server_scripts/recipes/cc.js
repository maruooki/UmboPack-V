ServerEvents.recipes(e => {

    const sless = e.shapeless
    const shp = e.shaped


    e.remove({output: 'computercraft:computer_normal'})
    e.remove({output: 'computercraft:cable'})
    e.remove({input: 'computercraft:turtle_normal'})
    e.remove({output: 'computercraft:turtle_normal'})
    e.remove({id: 'computercraft:computer_advanced'})

    sless(
        Item.of('computercraft:cable', 4),
        [
            'morered:bundled_network_cable',
            'gtceu:rubber_plate'
        ]
    )

    shp(
        Item.of('computercraft:computer_normal'),
        [
            'ABA',
            'CDE',
            'ABA'
        ],
        {
            A: 'gtceu:red_alloy_single_cable',
            B: '#forge:circuits/lv',
            C: 'gtceu:steel_rotor',
            D: 'gtceu:lv_machine_hull',
            E: 'gtceu:lv_lithium_battery'
        }
    )

    shp(
        Item.of('computercraft:turtle_normal'),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            A: 'gtceu:steel_screw',
            B: 'gtceu:wrought_iron_double_plate',
            C: 'gtceu:steel_plate',
            D: 'computercraft:computer_normal',
            E: 'ironchests:gold_chest'
        }
    )
})