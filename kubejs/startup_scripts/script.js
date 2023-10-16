// priority: 0
Platform.mods.kubejs.name = 'UmboPack Expert'
console.info('Custom Items added!')

StartupEvents.registry('item', event => {
	 event.create('umbocoin').displayName('UmboCoin')
	 event.create('starterkitwip').displayName('Specialized Starter Kit Credit')
	 event.create('blank_calculation_processor_press').displayName('Blank Inscriber Calculation Press')
	 event.create('blank_engineering_processor_press').displayName('Blank Inscriber Engineering Press')
	 event.create('blank_logic_processor_press').displayName('Blank Inscriber Logic Press')
	 event.create('blank_silicon_press').displayName('Blank Inscriber Silicon Press')
	 event.create('incomplete_portal').displayName('Incomplete Gateway Portal')
	 // blank presses for create assembly processes
	 /* KubeJS Create isnt on 1.20.1 yet, so this will crash the game
	 event.create('incomplete_blank_silicon_press','create:sequenced_assembly')
	 event.create('incomplete_blank_logic_processor_press','create:sequenced_assembly')
	 event.create('incomplete_blank_calculation_processor_press','create:sequenced_assembly')
	 event.create('incomplete_blank_engineering_processor_press','create:sequenced_assembly')
	*/
})

//StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
