const productsArray = [
    {
        name: "Celestial 3 tent",
        description: "Offering quick, intuitive setup, outstanding weather protection and a plethora of features at a great price, the award-winning Mountainsmith Celestial 3-person tent won't disappoint.",
        price: 16473,
        quantity: 25,
        category: "camp hike",
        brand: "Mountainsmith",
        imageUrl: "https://www.rei.com/media/b6c67161-91ee-4268-adcf-2a09d4736a2c.jpg"
    },
    {
        name: "Camp Creek 6 Two-room Tent",
        description: "A home away from home when camping with a group of family or friends, the 6-person ALPS Mountaineering Camp Creek Two-Room tent offers cabin-style comfort with a 7 ft. tall peak height.",
        price: 29973,
        quantity: 25,
        category: "camp hike",
        brand: "ALPS Mountaineering",
        imageUrl: "https://www.rei.com/media/8588c8be-0a8a-4242-8e8f-50d9f6764e21.jpg"
    },
    {
        name: "Aurora 2p Tent with Footprint",
        description: "With angular patterning reminiscent of mountainscapes, the NEMO Aurora 2P tent with footprint is a versatile and inviting home for adventure—ideal for car camping but light enough for backpacking.",
        price: 27995,
        quantity: 25,
        category: "camp hike",
        brand: "NEMO",
        imageUrl: "https://www.rei.com/media/58492632-3e5e-4038-846a-d5e73e378fd1.jpg"
    },
    {
        name: "Discovery 2 Tent",
        description: "Put the week's adulting aside and get outdoors with the Kelty Discovery 2-person tent, a spacious design with room for 2 that sets up easily and keeps you protected with a waterproof fly.",
        price: 7995,
        quantity: 25,
        category: "camp hike",
        brand: "Kelty",
        imageUrl: "https://www.rei.com/media/ab536e24-68a6-4151-a1a1-64dfcfb9d6da.jpg"
    },
    {
        name: "Limelight 3p Tent with Footprint",
        description: "With ample overhead space, the Marmot Limelight 3P tent with footprint ensures you'll strike the perfect balance between 3-season protection and roomy comfort on your next night in nature.",
        price: 32200,
        quantity: 25,
        category: "camp hike",
        brand: "Marmot",
        imageUrl: "https://www.rei.com/media/b2a3feff-f721-45b3-b441-d8eb4799136d.jpg"
    },
    {
        name: "Deuter Aircontact Lite 65 + 10 Pack - Men's",
        description: "The Deuter Aircontact Lite 65 + 10 pack balances reliable comfort, lightweight construction and ventilation. Vari-Quick back length adjustment and loads of features make it a do-it-all trekking pack.",
        price: 15393,
        quantity: 25,
        category: "camp hike",// "men",
        brand: "Deuter",
        imageUrl: "https://www.rei.com/media/7381729b-6f2c-4eae-ae4f-1a461b571ad3.jpg"
    },
    {
        name: "Deuter Aircontact Lite 50 + 10 Pack - Men's",
        description: "The perfect balance between reliable comfort, lightweight construction and ventilation, the Deuter Aircontact Lite 50 + 10 pack is durable and boasts effective load transfer features.",
        price: 13993,
        quantity: 25,
        category: "camp hike",// "men",
        brand: "Deuter",
        imageUrl: "https://www.rei.com/media/c5dd81e7-d1a5-41e6-800f-8f3bb8bb58b4.jpg"
    }, 
    {
        name: "Terra 55 Pack - Kids'",
        description: "A go-to pack for intrepid young explorers, The North Face Terra 55 kids' pack has a comfy, easy-to-adjust OPTIFIT™ suspension and deeply considered features they'll use every time they hit the trail.",
        price: 11973,
        quantity: 25,
        category: "camp hike",// "kids",
        brand: "The North Face",
        imageUrl: "https://www.rei.com/media/b8e0a02c-5716-41db-9ab8-5172b19b485a.jpg"
    }, 
    {
        name: "Rook 50 Pack - Women's",
        description: "Dreaming of days spent on the trail? The men's Osprey Rook 50 pack helps you get there. Its ventilated design, easy adjustment and large capacity keep you moving in comfort on long treks.",
        price: 15500,
        quantity: 25,
        category: "camp hike",// "women",
        brand: "Osprey",
        imageUrl: "https://www.rei.com/media/13190756-5b7a-46ab-8412-2d1802235f51?size=784x588"
    }, 
    {
        name: "Aether 65 Pack - women's",
        description: "Built to comfortably haul heavy loads for the weekend or for a week, the men's Osprey Aether 65 pack features a highly customizable fit for a variety of body shapes and sizes.",
        price: 29000,
        quantity: 25,
        category: "camp hike",// "women",
        brand: "Osprey",
        imageUrl: "https://www.rei.com/media/012f78cc-b7d0-48ec-9bb6-8f20281193b2?size=784x588"
    }, 
    {
        name: "Kelty Cosmic 20 Sleeping Bag - Men's",
        description: "A 3-season superstar for nights when temps dip to subfreezing, the men's Kelty Cosmic 20 sleeping bag's thermally efficient trapezoidal baffle construction and 550-fill-power down keep you warm.",
        price: 15995,
        quantity: 25,
        category: "camp hike",
        brand: "Kelty",
        imageUrl: "https://www.rei.com/media/d273cf87-2eca-493f-80dd-7b764471eabf.jpg"
    }, 
    {
        name: "NEMO Disco 15 Sleeping Bag - Men's",
        description: "Unlike most mummy bags, the men's 3-season NEMO Disco 15 sleeping bag is designed to let you sleep on your side in plush comfort anywhere you set up camp. Side sleepers, rejoice!",
        price: 29999,
        quantity: 25,
        category: "camp hike",
        brand: "NEMO",
        imageUrl: "https://www.rei.com/media/c56aec78-bb38-4fba-b11c-54fbb2300294.jpg"
    }, 
    {
        name: "NEMO Forte 35 Sleeping Bag - Women's",
        description: "Classic mummy-bag design isn't ideal for the 70% of people who sleep on their side. The women's NEMO Forte 35 sleeping bag adds room at the elbows and knees for 3-season, side-sleeping comfort.",
        price: 26599,
        quantity: 25,
        category: "camp hike",
        brand: "NEMO",
        imageUrl: "https://www.rei.com/media/1da0889c-dd2c-485e-9907-73bcc443ed13.jpg"
    }, 
    {
        name: "NEMO Disco 15 Sleeping Bag - Women's",
        description: "Side sleepers, rejoice! Unlike most mummy bags, the women's 3-season NEMO Disco 15 sleeping bag is designed to let you sleep on your side in plush comfort anywhere you set up camp.",
        price: 19998,
        quantity: 25,
        category: "camp hike",
        brand: "NEMO",
        imageUrl: "https://www.rei.com/media/b6f38803-4b3f-46a7-bf65-d195e2fc71bc.jpg"
    }, 
    {
        name: "Selk'Bag Recycled Wearable Sleeping Bag - Kids'",
        description: "description",
        price: 8995,
        quantity: 25,
        category: "camp hike",
        brand: "Selk'Bag",
        imageUrl: "https://www.rei.com/media/1de9040a-4575-400f-bb64-b20f19c6e7b5?size=784x588"
    }, 
    {
        name: "Spot 350 Headlamp",
        description: "Now housed in a smaller, lower-profile design with a wide array of brightness modes, the Black Diamond Spot 350 headlamp ensures you'll see what's ahead or right in front even in the darkest hours.",
        price: 3995,
        quantity: 25,
        category: "camp hike",
        brand: "Black Diamond",
        imageUrl: "https://www.rei.com/media/59691673-2899-4dd9-8ef5-ad951d481b53.jpg"
    }, 
    {
        name: "Actik Core Headlamp",
        description: "A rechargeable, multi-beam headlamp, the Petzl Actik Core offers 450 lumens of power to light the way during dynamic outdoor activities like running, hiking and backpacking.",
        price: 6995,
        quantity: 25,
        category: "camp hike",
        brand: "Petzl",
        imageUrl: "https://www.rei.com/media/1aaedbbf-4d36-4e24-85bf-bed97e5d5c12.jpg"
    }, 
    {
        name: "Tikka Headlamp",
        description: "Prepping dinner at the campsite or heading out for a predawn hike gets a little easier with the Petzl Tikka headlamp. Its 300-lumen flood beam provides ample lighting for proximity and some movement.",
        price: 2995,
        quantity: 25,
        category: "camp hike",
        brand: "Petzl",
        imageUrl: "https://www.rei.com/media/7eb2d077-ecd4-4cea-9ed8-e0fec161a32b.jpg"
    }, 
    {
        name: "LuminAID PackLite Max 2-in-1 Power Lantern",
        description: "Light up your campsite and provide a backup battery charge to your devices when you are off the grid with the LuminAID PackLite Max 2-in-1 power lantern.",
        price: 4995,
        quantity: 25,
        category: "camp hike",
        brand: "LuminAID",
        imageUrl: "https://www.rei.com/media/3e3fc8a4-7834-4761-aec8-7c5ad185aedf.jpg"
    }, 
    {
        name: "Black Diamond Moji Lantern",
        description: "Simple, bright and compact, the Moji lantern features durable construction and a powerful 100 lumens of light in a remarkably light 3-ounce frame for incredible visibility at backcountry campsites.",
        price: 2495,
        quantity: 25,
        category: "camp hike",
        brand: "Black Diamond",
        imageUrl: "https://www.rei.com/media/a23f6c70-c6ff-4f74-9a16-569a585711ed.jpg"
    }, 
    {
        name: "Tri-Leg Stool - Clay/Apricot",
        description: "Perfect to bring along when space is limited and weight is a factor, the ALPS Mountaineering Tri-Leg stool makes it easy to snag a spot by the campfire or on the soccer field sidelines.",
        price: 1873,
        quantity: 25,
        category: "camp hike",
        brand: "ALPS Mountaineering",
        imageUrl: "https://www.rei.com/media/e2418141-1928-44d4-9caa-99356e011cb7.jpg"
    }, 
    {
        name: "Helinox Chair Zero",
        description: "The Helinox Chair Zero is a lightweight and comfortable, four-legged camp chair that packs down to the width of a standard 32 oz. water bottle and weighs just a single pound.",
        price: 12995,
        quantity: 25,
        category: "camp hike",
        brand: "Helinox",
        imageUrl: "https://www.rei.com/media/dc47d9eb-d3d8-4c1f-93e9-9e8a33d70f84.jpg"
    }, 
    {
        name: "Timberline Camp Chair",
        description: "Sit back and relax with a low-to-the-ground seat position that's perfect for chilling by the fire. The Klymit Timberline camp chair is easy to use and folds down small for travel and storage.",
        price: 4473,
        quantity: 25,
        category: "camp hike",
        brand: "Klymit",
        imageUrl: "https://www.rei.com/media/a206c2c3-23e9-43c0-b1a8-dea754fbf4cc.jpg"
    }, 
    {
        name: "GCI Outdoor Kickback Rocker Chair",
        description: "Supplying copious comfort for its midsize stature, the light and compact GCI Outdoor Kickback Rocker chair sits slightly lower than standard chairs, but higher than low-to-the-ground designs.",
        price: 6500,
        quantity: 25,
        category: "camp hike",
        brand: "GCI Outdoor",
        imageUrl: "https://www.rei.com/media/42ee18df-a88c-4100-a4b6-7d65d0744ad5.jpg"
    }, 
    {
        name: "Kelty Low Loveseat",
        description: "Cuddle up with your partner or best pal in the Kelty Low loveseat. Its relaxed, low-profile, reclined design means you won't be towering over the campfire or blocking anyone's view of the stage.",
        price: 13995,
        quantity: 25,
        category: "camp hike",
        brand: "Kelty",
        imageUrl: "https://www.rei.com/media/985fe6c3-c36e-45ed-b2a4-3d86acff75c4.jpg"
    }, 
    {
        name: "Atlas Hammock Suspension System",
        description: "ENO designed the Atlas hammock suspension system with 3 things in mind: strength, security and ease. This no-knots-needed setup will have you relaxing securely in seconds.",
        price: 2995,
        quantity: 25,
        category: "camp hike",
        brand: "ENO",
        imageUrl: "https://www.rei.com/media/abe96871-4e83-4a91-a08c-e1ba29160268.jpg" 
    }, 
    {
        name: "Traverse Hammcok",
        description: "With its single-panel design instead of the traditional 3 panels, the Klymit Traverse hammock offers a comfortable sleeping position, and stretches and sags less over time compared to 3-panel designs.",
        price: 4473,
        quantity: 25,
        category: "camp hike",
        brand: "Klymit",
        imageUrl: "https://www.rei.com/media/d8ed0043-d32f-4728-af9a-852a1a85da72.jpg" 
    }, 
    {
        name: "JungleLink Hammock System",
        description: "Delivering extended coverage, extra comfort and an easy setup, the ENO JungleLink hammock system helps you stay totally dry and bite-free when catching zzz's in the backcountry.",
        price: 20995,
        quantity: 25,
        category: "camp hike",
        brand: "ENO",
        imageUrl: "https://www.rei.com/media/1eb679d3-1f82-457b-8420-61019b1946c3.jpg" 
    }, 
    {
        name: "Roo Single Hammock",
        description: "Built for backpackers who like to travel light and sleep above ground, the Kammok Roo Single hammock is packable, lightweight (only 10 oz.!), comfortable and ready for adventure.",
        price: 4093,
        quantity: 25,
        category: "camp hike",
        brand: "Kammok",
        imageUrl: "https://www.rei.com/media/1a75e215-26b6-4913-a584-fb7073927ed7.jpg" 
    }, 
    {
        name: "Python 10 Hammock Straps",
        description: "The Kammok Python 10 hammock straps offer 40 connection points via two 10 ft. straps that hang almost anywhere and hold more than 500 lbs. And, they're lighter and more adaptable than previous models.",
        price: 2995,
        quantity: 25,
        category: "camp hike",
        brand: "Kammok",
        imageUrl: "https://www.rei.com/media/51a10197-5923-4dc6-b78d-b4ae4d451c06.jpg" 
    },
    {
        name: "Nite Ize DoohicKey ClipKey Tool",
        description: "With the size and shape of a house key plus a carabiner clip, the clever, lightweight Nite Ize DoohicKey ClipKey tool has all the functionality of a basic multitool and none of the bulk.",
        price: 650,
        quantity: 25,
        category: "none",
        brand: "Nite Ize",
        imageUrl: "https://www.rei.com/media/3a79d8b8-c846-4510-aa30-33752ee341bf.jpg"
    },
    {
        name: "namCelestron Nature 10 x 25 Monoculare",
        description: "The Celestron Nature 10x25 monocular is ideal for viewing wildlife on trips where pack weight is important. Tipping the scales at a mere 6 oz., it's ideal for fast-and-light backpackers and travelers.",
        price: 3995,
        quantity: 25,
        category: "camp hike",
        brand: "Celestron",
        imageUrl: "https://www.rei.com/media/0eb69b61-aed8-48de-b005-097ad450ac81.jpg"
    },
    {
        name: "Firebiner",
        description: "This handy tool starts fires, cuts wires and opens bottles. The outdoor element Firebiner looks like a low-key carabiner, but it provides outdoor enthusiasts a lot more bang for their buck.",
        price: 1495,
        quantity: 25,
        category: "camp hike",
        brand: "outdoorElement",
        imageUrl: "https://www.rei.com/media/aba35124-6b41-4fe9-8e89-9a352f300a58.jpg"
    },
    {
        name: "MCB Amphibian Compass",
        description: "Perfect for kayakers and other mariners--a durable lightweight mirror compass that floats.",
        price: 4500,
        quantity: 25,
        category: "camp hike",
        brand: "Suunto",
        imageUrl: "https://www.rei.com/media/3563b806-15ae-46a1-b92e-4f38ddf2337a.jpg"
    },
    {
        name: "The Deuce #2 UL Backcountry Trowel",
        description: "The Deuce #2 UL trowel from TheTentLab is a revolutionary ultralight backcountry latrine trowel that can be used with the handle up or, for 4 times the digging power, handle down.",
        price: 1995,
        quantity: 25,
        category: "camp hike",
        brand: "The TentLab",
        imageUrl: "https://www.rei.com/media/44df3978-c43f-4cc9-8b08-0dfa5cfcc39d.jpg"
    },
    {
        name: "Pocket Chain Saw",
        description: "Make quick work of overgrown trails and downed trees with the SOL Pocket chain saw. Its sharp cutting teeth and strong carbon steel construction make trail cleanup a breeze.",
        price: 1995,
        quantity: 25,
        category: "camp hike",
        brand: "SOL",
        imageUrl: "https://www.rei.com/media/aabb372a-7ae1-4b48-ba07-ee7eb26e3cef.jpg"
    },
    {
        name: "ProTrek Prw3500-1 Multifunction Watch",
        description: "Stay in tune with the environment anywhere you go with the Casio ProTrek PRW3500-1 multifunction watch. It combines an altimeter, barometer and compass with solar power and precise atomic time.",
        price: 14993,
        quantity: 25,
        category: "camp hike",
        brand: "Casio",
        imageUrl: "https://www.rei.com/media/b7f5bc87-18a0-46cb-905a-47be260f37c5.jpg"
    },
    {
        name: "Venu Sq",
        description: "Now is the perfect time to move. Featuring a bright color display, the Garmin Venu Sq GPS smartwatch combines daily style with health monitoring and fitness features that inspire you to keep moving.",
        price: 20000,
        quantity: 25,
        category: "camp hike",
        brand: "Garmin",
        imageUrl: "https://www.rei.com/media/afc48615-2d0a-471f-a730-7e6b34022b8e.jpg"
    },
    {
        name: "Pro Trek PRG600YB Analog/Digital Watch",
        description: "The fully loaded Casio Pro Trek PRG600YB triple-sensor analog/digital watch boasts an altimeter, barometer, thermometer, countdown timer, 5 daily alarms, a compass and a solar power-charged battery.",
        price: 35000,
        quantity: 25,
        category: "camp hike",
        brand: "Casio",
        imageUrl: "https://www.rei.com/media/c8df0054-e8f4-4284-9506-343ab7156fd9.jpg"
    },
    {
        name: "tactix Delta Solar GPS Watch",
        description: "Harnessing the power of the sun with mission-ready features, the Garmin tactix Delta Solar GPS watch gives you the ability to track your fitness, navigate the trails and go covert in the field.",
        price: 110000,
        quantity: 25,
        category: "camp hike",
        brand: "Garmin",
        imageUrl: "https://www.rei.com/media/d3618b03-a571-4ff6-86d1-aa6964aca9da.jpg"
    },
    {
        name: "Mt. Maddsen Mid Waterproof Hiking Boots - Men's",
        description: "Crafted of full-grain leather, the men's Mt. Maddsen Mid waterproof hiking boots offer rugged, trail-worthy performance and comfort for long miles in the wilderness.",
        price: 99999,
        quantity: 25,
        category: "camp hike",
        brand: "Timberland",
        imageUrl: "https://www.rei.com/media/53a03193-14c6-4588-9010-e3111501c216.jpg"
    },
    {
        name: " X Ultra 3 Mid GTX Hiking Boots - Men's",
        description: "Wet conditions, tough descents and long hikes are no problem for the men's Salomon X Ultra 3 Mid GTX hiking boots. They provide the cushioning and flexibility needed for comfy, stable steps.",
        price: 16500,
        quantity: 25,
        category: "camp hike",
        brand: "Salomon",
        imageUrl: "https://www.rei.com/media/fafc7cbf-b03d-4190-a430-c488d77be06c.jpg"
    },
    {
        name: "FC ECO 3.0 GTX Hiking Boots - Men's",
        description: "With a mix of recycled materials plus a versatile, flexible, waterproof design, La Sportiva FC ECO 3.0 GTX men's hiking boots will deftly handle your day hikes and light backpacking trips.",
        price: 12573,
        quantity: 25,
        category: "camp hike",
        brand: "La Sportiva",
        imageUrl: "https://www.rei.com/media/a45087f2-9619-41a7-ad67-bfa8a031a0d1.jpg"
    },
    {
        name: "Liftop III Boots - Men's",
        description: "Stay nimble even when the temperature drops. The Columbia Liftop III insulated boots are lightweight and well insulated to keep you going strong in the bitter cold.",
        price: 7993,
        quantity: 25,
        category: "camp hike",
        brand: "Columbia",
        imageUrl: "https://www.rei.com/media/27f60601-d644-4627-b440-09e0270528e3.jpg"
    },
    {
        name: "Anchorage III Waterproof Boots - Men's",
        description: "Ideal for winter wear in wet weather, the nubuck KEEN Anchorage III waterproof boots pair nicely with jeans or slacks and keep your feet cozy with waterproof membranes and lightweight insulation.",
        price: 14995,
        quantity: 25,
        category: "camp hike",
        brand: "KEEN",
        imageUrl: "https://www.rei.com/media/bb72e769-5ed3-4bba-a1f2-ffa70f24bbe8.jpg"
    },
    {
        name: "Tech 2.0 T-Shirt - Men's",
        description: "With a looser fit and fabric that wicks away your hard-earned sweat, the men's Under Armour Tech 2.0 T-shirt is a go-to for high-intensity workouts and hot-weather adventures.",
        price: 2193,
        quantity: 25,
        category: "men",
        brand: "Under Armour",
        imageUrl: "https://www.rei.com/media/9a317101-2352-47ef-9842-50a2dbc3e8ed.jpg"
    },
    {
        name: "Strato Tech Polo Shirt - Men's",
        description: "An office-friendly riff on your favorite tech tee, the men's Vuori Strato Tech polo shirt is crafted from moisture-wicking, anti-odor performance stretch jersey with a touch of added style.",
        price: 5400,
        quantity: 25,
        category: "men",
        brand: "Vuori",
        imageUrl: "https://www.rei.com/media/6fef16dd-446d-4632-905e-ab1c968604b9.jpg"
    },
    {
        name: "P-6 Logo Responsibili-Tee Long-Sleeve Shirt - Men's",
        description: "Made from sturdy recycled cotton and postconsumer recycled polyester, the men's Patagonia LS P-6 Logo Responsibili-Tee long-sleeve shirt has taped shoulder seams for comfort and fit retention.",
        price: 4695,
        quantity: 25,
        category: "men",
        brand: "Patagonia",
        imageUrl: "https://www.rei.com/media/9c4a113b-6c84-42e2-b9db-7d649712b0c5.jpg"
    },
    {
        name: "Weisse Shirt - Men's",
        description: "As cool and crisp as a sour beer on a hot summer's day, the men's Outdoor Research Weisse Shirt is just as ready to take its place as helmsman as it is for meeting up with friends for happy hour.",
        price: 4573,
        quantity: 25,
        category: "men",
        brand: "Outdoor Research",
        imageUrl: "https://www.rei.com/media/1ded2938-d019-4bd7-a0b1-14342f32aa3d.jpg"
    },
    {
        name: "Silver Ridge 2.0 Plaid Long-Sleeve Shirt - Men's",
        description: "The men's Columbia Silver Ridge 2.0 Plaid long-sleeve shirt holds its own against snagged branches and brambles, and its UPF 50 sun protection offers coverage when there isn't a cloud in the sky.",
        price: 6000,
        quantity: 25,
        category: "men",
        brand: "brand",
        imageUrl: "https://www.rei.com/media/a646a3f7-aa05-4ef3-ba65-086d45378181.jpg"
    },
    {
        name: "Original 500 Chelsea Boots - Black - Women's",
        description: "Blundstone Original 500 Chelsea boots are lean, clean and straightforward, and ergonomically engineered to reduce fatigue. These beloved Australian boots will always have a place in your closet.",
        price: 19995,
        quantity: 25,
        category: "women",
        brand: "Blundstone",
        imageUrl: "https://www.rei.com/media/6c8a5721-edf5-411b-9a54-ec000782c5bb.jpg"
    },
    {
        name: "Minx Shorty III Snow Boots - Women's",
        description: "Following its taller sibling, the Columbia Minx Shorty III boots are just as wearable in winter conditions. Kick back by the fire in the lodge or brave the snow—your feet will be dry and happy.",
        price: 10000,
        quantity: 25,
        category: "women",
        brand: "Columbia",
        imageUrl: "https://www.rei.com/media/f35e7b2c-d94d-43c6-a079-9b7727af1747.jpg"
    },
    {
        name: "Explorer II Joan Felt WP Boots - Women's",
        description: "Enjoy the lightweight fit of sneakers but with full weather protection—light insulation, waterproof uppers and grippy soles for tackling slick city streets. Meet the Sorel Explorer II Joan Felt boots.",
        price: 9993,
        quantity: 25,
        category: "women",
        brand: "Sorel",
        imageUrl: "https://www.rei.com/media/c4192994-7b5f-4fe2-af06-b2b9559f8503.jpg"
    },
    {
        name: "High-Top Boots - Women's",
        description: "With brogues as inspiration, the Blundstone Women's High-Top boots have punched-leather details around the gores, a refined profile, and the durability and shock absorption of the original Blunnies.",
        price: 22095,
        quantity: 25,
        category: "women",
        brand: "Blundstone",
        imageUrl: "https://www.rei.com/media/07a70909-1bd7-48a7-8ce4-619cef63db39.jpg"
    },
    {
        name: "Slopeside Peak Omni-Heat Boots - Women's",
        description: "Welcome winter with the women's Columbia Slopeside Peak Omni-Heat boots. Thermal-reflective linings retain warmth, waterproof membranes let you splash in slush, and grippy outsoles help stop slips.",
        price: 7993,
        quantity: 25,
        category: "women",
        brand: "Columbia",
        imageUrl: "https://www.rei.com/media/d69bc2a3-c8f8-4172-bdc2-a68d62833e6a.jpg"
    },
    {
        name: "Capilene Cool Daily Shirt - Women's",
        description: "Whether you're running, climbing or just hanging out, the women's Patagonia Capilene Cool Daily shirt dries fast, wicks moisture and stretches with you as you move.",
        price: 3500,
        quantity: 25,
        category: "women",
        brand: "Patagonia",
        imageUrl: "https://www.rei.com/media/7f3148d3-a8ee-4f92-a9a1-a024d1056bdb.jpg"
    },
    {
        name: "Leave it Better Heart T-Shirt - Women's",
        description: "Take care of nature and remind others to do the same with this women's Parks Project Leave it Better Heart short-sleeve T-shirt. It pairs soft, lived-in comfort with beautiful, delicate botanical art.",
        price: 3800,
        quantity: 25,
        category: "women",
        brand: "brand",
        imageUrl: "https://www.rei.com/media/7e4d10c9-ab72-4848-9ef4-3121d117dbda.jpg"
    },
    {
        name: "Capilene Cool Trail Shirt - Women's",
        description: "When your day starts at dawn and ends with muddy boots, wear the women's Patagonia Capilene Cool Trail shirt to stay cool and dry. This soft knit was made to keep you comfy from start to finish.",
        price: 2893,
        quantity: 25,
        category: "women",
        brand: "Patagonia",
        imageUrl: "https://www.rei.com/media/e5b5076b-7dbe-4ff2-91c2-5c94a85df47d.jpg"
    },
    {
        name: "Uptempo Top - Women's",
        description: "Spend the summer hiking hills, climbing crags and exploring new escapes in the women's Athleta Uptempo top. Sun-protective fabric and thumbholes keep you covered on the trail and off.",
        price: 6995,
        quantity: 25,
        category: "women",
        brand: "Athleta",
        imageUrl: "https://www.rei.com/media/40ca57f5-dba3-457d-9383-e455c6a22a9b.jpgge"
    },
    {
        name: "Wander T-Shirt - Women's",
        description: "Made for long, comfy days on the trail or at the crag, the women's Wander T-shirt from The North Face boasts sweat-wicking FlashDry™, UPF 50+ sun protection and light, breathable fabric.",
        price: 2793,
        quantity: 25,
        category: "women",
        brand: "The North Face",
        imageUrl: "https://www.rei.com/media/bfaced60-1022-4b29-a3ea-d5364287b8d6.jpg"
    },
    {
        name: "Snowfall P Snow Boots - Kids'",
        description: "Waste no time getting your kids geared up for fun in the snow with Kamik Snowfall P snow boots, made with seam-sealed waterproof uppers to ensure a whole day worth of comfort.",
        price: 4793,
        quantity: 25,
        category: "kids",
        brand: "Kamik",
        imageUrl: "https://www.rei.com/media/1dfd0134-a162-42c9-af55-0aa0a8e52dcd.jpg"
    },
    {
        name: "Alpenglow IV Insulated Boots - Kids'",
        description: "Easy for active young explorers to pull on and secure in the rush to explore fresh snowfall, The North Face Alpenglow IV winter boots feature warm, removable liners and protective, waterproof shells.",
        price: 4793,
        quantity: 25,
        category: "kids",
        brand: "The North Face",
        imageUrl: "https://www.rei.com/media/27d555b7-0487-4cde-a60d-466bd2952c2d.jpg"
    },
    {
        name: "Bugaboot Celsius Boots - Kids'",
        description: "Take the whole family snowshoeing with the kids' Columbia Bugaboot Celsius boots. They keep young feet happy with reflective thermal linings, insulation and waterproofing.",
        price: 4973,
        quantity: 25,
        category: "kids",
        brand: "Columbia",
        imageUrl: "https://www.rei.com/media/82d50c54-480b-4623-95a0-1c4057026ad5.jpg"
    },
    {
        name: "Greylock Waterproof Hiking Boots - Kids'",
        description: "Need reliable boots that won't weigh down your kid's feet? Try the Merrell Greylock Waterproof boots—they're made with durable leather uppers, airy midsoles and lightweight rubber.",
        price: 6000,
        quantity: 25,
        category: "kids",
        brand: "Merrel",
        imageUrl: "https://www.rei.com/media/41b01c96-7559-4153-876f-0fa7feaec76b.jpg"
    },
    {
        name: "Snowbug 3 Snow Boots - Toddlers'",
        description: "Watch your little one experience winter for the first time wearing the Kamik Snowbug 3 snow boots. They're sure to keep small feet warm, dry and on the ground—wherever the path leads.",
        price: 3493,
        quantity: 25,
        category: "kids",
        brand: "Kamik",
        imageUrl: "https://www.rei.com/media/760ed972-d6d3-4d77-be5c-51d99fa35583.jpg"
    },
    {
        name: "Sterling VR9 9.8mm X 60m Dry-Core Rope",
        description: "Just getting into the sport or steadily moving through the ranks? The Sterling VR9 9.8 mm Dry-Core rope has a beefy core and 9.8 mm diameter for a lightweight rope on multi-pitch routes.",
        price: 11995,
        quantity: 25,
        category: "climb",
        brand: "Sterling",
        imageUrl: "https://www.rei.com/media/0978e54b-4d94-476f-9bc5-6a058987737f.jpg"
    },
    {
        name: "Boa Eco 9.8mm X 60m Non-Dry Rope",
        description: "The Edelrid Boa Eco is a robust, all-round rope that's made of high-quality yarns left over from production, giving it a unique look but the same handling and strength as other Edelrid ropes.",
        price: 11995,
        quantity: 25,
        category: "climb",
        brand: "Edelrid",
        imageUrl: "https://www.rei.com/media/c4a22f50-7de2-404e-9e46-4e9e57b500a9.jpg"
    },
    {
        name: "Gym Classic 9.5mm x 40m Non-Dry Rope",
        description: "A great choice for indoor climbing, the Mammut Gym Classic 9.5mm x 40m non-dry rope offers a great combination of handling, durability and light weight.",
        price: 10995,
        quantity: 25,
        category: "climb",
        brand: "Mammut",
        imageUrl: "https://www.rei.com/media/9b8cc379-2251-4a80-af47-afa206d22e65.jpg"
    },
    {
        name: "9.9mm x 40m Non-Dry Rope",
        description: "Designed for heavy use and year-round climbing, the burly Black Diamond 9.9mm Non-Dry rope boasts a thick diameter for heavy use on varied climbs.",
        price: 12995,
        quantity: 25,
        category: "climb",
        brand: "Black Diamond",
        imageUrl: "https://www.rei.com/media/f2f8a546-2026-4414-a288-1bbb5722d944.jpg"
    },
    {
        name: "Velocity XEROS 9.8mm x 60m Dry Rope",
        description: "A quintessential all-rounder suited for both rock and ice, the Sterling Velocity XEROS 9.8 mm dry rope is the flagship of the Sterling lineup: lightweight, durable, long-lasting and easy to handle.",
        price: 24495,
        quantity: 25,
        category: "climb",
        brand: "Sterling",
        imageUrl: "https://www.rei.com/media/83c8e0b6-6699-4010-ba49-c34219896954.jpg"
    },
    {
        name: "Circuit Crash Pad",
        description: "Built for running circuits in your favorite boulder-field, the Black Diamond Circuit Crash Pad is a workhorse that combines a premium foam layup with time-tested design in a wallet-friendly package.",
        price: 15995,
        quantity: 25,
        category: "climb",
        brand: "Black Diamond",
        imageUrl: "https://www.rei.com/media/6ade200b-09d5-4590-8e92-f368f9bb2efa.jpg"
    },
    {
        name: "Session II Crash Pad",
        description: "You move around while you work on boulder problems, so your pad should be easy to maneuver. The Metolius Session II crash pad has several updates to the previous version and still weighs only 9 lbs.",
        price: 19995,
        quantity: 25,
        category: "climb",
        brand: "Metolius",
        imageUrl: "https://www.rei.com/media/f983ac83-4e4a-4a9f-bf21-abfd7152958c.jpg"
    },
    {
        name: "Magnum Crash Pad",
        description: "The Metolius Magnum crash pad lives up to its name with a giant 70 x 47 in. spread and 4 in. of thickness that will cushion your falls while you work a boulder problem.",
        price: 39995,
        quantity: 25,
        category: "climb",
        brand: "Metolius",
        imageUrl: "https://www.rei.com/media/b93d2668-f9d6-4297-83b6-76c55dccc484.jpg"
    },
    {
        name: "Shortstop Crash Pad",
        description: "An affordable addition to your bouldering essentials, the Metolius Shortstop crash pad covers gaps and offers extra protection with little added weight.",
        price: 4995,
        quantity: 25,
        category: "climb",
        brand: "Metolius",
        imageUrl: "https://www.rei.com/media/16de0172-c0c4-47cf-bb89-c89442dd76f8.jpg"
    },
    {
        name: "Drop Zone Crash Pad",
        description: "The perfect daily driver for the dedicated boulderer, the redesigned Black Diamond Drop Zone crash pad features a better suspension system, easier-to-use buckles, improved corners and new graphics.",
        price: 27995,
        quantity: 25,
        category: "climb",
        brand: "Black Diamond",
        imageUrl: "https://www.rei.com/media/6a58a213-8bc0-4744-b496-2e73d9c579fd.jpg"
    },
    {
        name: "Graphic Organic T-shirt - Kids'",
        description: "Crafted from soft organically grown cotton, the Patagonia Graphic Organic T-shirt sports a bison with the iconic Fitz Roy skyline. Taped shoulder seams and crew neck offer comfort and fit retention.",
        price: 99999,
        quantity: 25,
        category: "kids",
        brand: "Patagonia",
        imageUrl: "https://www.rei.com/media/b23718e2-4cdb-493e-a671-c48795b6f6a5.jpg"
    },
    {
        name: "Terra Trail T-Shirt - kids'",
        description: "They'll tackle the trails in comfort on hot days with the kids' Columbia Terra Trail T-shirt. This casual tee has built-in UPF 50 sun protection and wicking power for next-to-skin comfort.",
        price: 1573,
        quantity: 25,
        category: "kids",
        brand: "Columbia",
        imageUrl: "https://www.rei.com/media/7f5bc14c-d5af-4bdb-8723-8a3c48c4ad88.jpg"
    },
    {
        name: "Fork Stream Hoodie - kids'",
        description: "Made for shade, this toddlers' Columbia Fork Stream hoodie features sun-stopping UPF 50 protection and moisture-wicking properties to keep your little one dry outdoors.",
        price: 2000,
        quantity: 25,
        category: "kids",
        brand: "Columbia",
        imageUrl: "https://www.rei.com/media/98930d68-2a44-404d-984c-8501fc335dbe.jpg"
    },
    {
        name: "Insect shield Emerson Long-Sleeve Shirt - kids",
        description: "A top-notch kids' outdoor shirt, the Craghoppers Insect Shield Emerson shirt features Insect Shield® tech to protect from bugs and moisture management for comfort on adventures near and far.",
        price: 4473,
        quantity: 25,
        category: "kids",
        brand: "Crag Hoppers",
        imageUrl: "https://www.rei.com/media/575e141d-b900-43c7-951d-d7c51f46dc6c.jpg"
    },
    {
        name: "Wild Boot Graphic T-shirt - kids'",
        description: "The call of the wild can pop up anywhere—like on the REI Co-op kids' Wild Boot graphic T-shirt. The kid who answers will discover the joys of life outdoors, plus a cool, comfy shirt to wear there.",
        price: 1493,
        quantity: 25,
        category: "kids",
        brand: "Columbia",
        imageUrl: "https://www.rei.com/media/fda44e8d-0952-4479-9121-f3bd0ccec513.jpg"
    },
    {
        name: "Outdoor Knots - Waterproof Plastic Fan Pack",
        description: "Learn the 20 best knots to cover every rope-tying situation. Outdoor Knots features easy-to-read, step-by-step drawings on waterproof plastic cards.",
        price: 595,
        quantity: 25,
        category: "resources",
        brand: "Pro-Knot",
        imageUrl: "https://www.rei.com/media/3501d1c2-1c97-4b80-a3b7-ce6e3c1a7a99.jpg"
    },
    {
        name: "Campfire Stories: Tales from America's National Parks",
        description: "Bringing together tales about 6 iconic national parks, Campfire Stories includes tales from indigenous peoples, writers (such as John Muir and Bill Bryson), pioneers and more.",
        price: 2195,
        quantity: 25,
        category: "resources",
        brand: "Mountaineers Books",
        imageUrl: "https://www.rei.com/media/7804110c-8ce8-4d42-9bff-7d873d39d24d.jpg"
    },
    {
        name: "Dirty Gourmet: Food For Your Outdoor Adventures",
        description: "Full of more than 120 tasty, modern recipes for day trips, car camping and backcountry adventures, Dirty Gourmet celebrates delicious food, warm company and outdoor fun.",
        price: 2495,
        quantity: 25,
        category: "resources",
        brand: "Mountaineers Books",
        imageUrl: "https://www.rei.com/media/cb0c282e-4ffc-4a0e-874f-9c13ed5388ed.jpg"
    },
    {
        name: "Road Atlas - Adventure Edition",
        description: "The National Geographic Road Atlas Adventure Edition details 100 top outdoor destinations as selected by the editors of National Geographic Adventure Magazine.",
        price: 2495,
        quantity: 25,
        category: "resources",
        brand: "National Geographic",
        imageUrl: "https://www.rei.com/media/7c8498c3-646e-43ce-bb7b-0eb51afca4f1.jpg"
    },
    {
        name: "209S - The Enchantments: Stuart Range",
        description: "Focusing on the area just northeast of Mount Stuart, Green Trails Map 209S - The Enchantments: Stuart Range is your guide to recreation in this stunning alpine region.",
        price: 1200,
        quantity: 25,
        category: "resources",
        brand: "Green Trails",
        imageUrl: "https://www.rei.com/media/497c4538-e2f6-4640-bb81-ebd17fdfdce7.jpg"
    },
    {
        name: "ThermoBall Eco Snow Triclimate 3-in-1 Jacket - Men's",
        description: "With a waterproof shell and warm liner jacket that can be worn together or alone, The North Face ThermoBall Eco Snow Triclimate 3-in-1 men's jacket offers options for unpredictable winter days.",
        price: 36000,
        quantity: 25,
        category: "men",
        brand: "The North Face",
        imageUrl: "https://www.rei.com/media/0a680a83-9973-4454-b88b-461ea827c0fe.jpg"
    },
    {
        name: "Boundary Ridge GORE-TEX 3L Jacket - Men's",
        description: "Inspired by cat trips, heli-drops and sidecountry storm laps, the Mountain Hardwear Boundary Ridge GORE-TEX 3L men's jacket has a rugged build that helps you take winter adventures to new heights.",
        price: 35573,
        quantity: 25,
        category: "men",
        brand: "Mouintain Hardwear",
        imageUrl: "https://www.rei.com/media/e31e38c5-c242-4dcb-ab0a-86ca19f254f6.jpg"
    },
    {
        name: "Prowess Insulated Jacket - Women's",
        description: "With rider-driven features and a easy look for around-town wear, the women's Burton Prowess jacket is waterproof and breathable, loaded with pockets and cozy thanks to a sherpa-fleece-lined collar.",
        price: 27595,
        quantity: 25,
        category: "women",
        brand: "Burton",
        imageUrl: "https://www.rei.com/media/07b098c8-96b7-4155-bc98-a03e2bf325f3.jpg"
    },
    {
        name: "Upstride Jacket - Men's",
        description: "Built to move fast in the backcountry on long, high-output tours, the men's Patagonia Upstride jacket boasts a stretchy, highly-breathable, moisture-managing fabric and a clean, dynamic design.",
        price: 29995,
        quantity: 25,
        category: "men",
        brand: "Patagonia",
        imageUrl: "https://www.rei.com/media/fa8b7a1e-ea4f-4096-8720-3c2a1b3afca2.jpg"
    },
    {
        name: "Tuscany II Insulated Jacket - Women's",
        description: "A timeless winter coat for around town or on the ski hill, the women's Obermeyer Tuscany II jacket radiates tastefulness. A partnership with REPREVE® means it's made using recycled plastics.",
        price: 25995,
        quantity: 25,
        category: "women",
        brand: "brand",
        imageUrl: "https://www.rei.com/media/609e60aa-3d0f-418f-acf8-39a63acd7e12.jpg"
    },
    {
        name: "Last Tracks Insulated Jacket - Men's",
        description: "When you're trekking through the wintry white, the men's Columbia Last Tracks insulated jacket keeps you warm and dry. Its convenient pockets store your goggles, ski pass, keys and more.",
        price: 175,
        quantity: 25,
        category: "men",
        brand: "Columbia",
        imageUrl: "https://www.rei.com/media/fa960cf0-6f3f-4fee-ae30-503ba4064503.jpg"
    },
    {
        name: "Covert Insulated Jacket - Men's",
        description: "Ride in style and reduce your impact on the planet. The Burton Covert jacket has 40% recycled THERMOLITE® insulation and the whole jacket is bluesign approved—and of course it is functional as heck.",
        price: 21995,
        quantity: 25,
        category: "men",
        brand: "Burton",
        imageUrl: "https://www.rei.com/media/f4087412-5c26-4607-89ed-2ce2ae6a43d2.jpg"
    },
    {
        name: "Powderflo Jacket - Women's",
        description: "Inspired by the classic The North Face Denali series, the waterproof and breathable The North Face Powderflo is an all-conditions jacket that borrows from the past to make the future.",
        price: 26173,
        quantity: 25,
        category: "women",
        brand: "The North face",
        imageUrl: "https://www.rei.com/media/fe1617bf-00c6-4019-b87f-5f76a53d860d.jpg"
    },
    {
        name: "Millie Insulated Jacket - Women's",
        description: "Clean lines, removable faux-fur hood ruff and distinctive trim add a touch of elegance to the waterproof/breathable, PrimaLoft® insulated and feature-loaded Boulder Gear Millie jacket.",
        price: 17373,
        quantity: 25,
        category: "women",
        brand: "Boulder Gear",
        imageUrl: "https://www.rei.com/media/97f79fad-49c3-43b2-bb71-963e90f57f82.jpg"
    },
    {
        name: "Jet Ski Insulated Jacket - Women's",
        description: "Don't settle for looking like a marshmallow on the slopes just to stay warm. The Roxy Jet Ski insulated jacket features a slim cut—plus all the tech features you need in your snow jacket.",
        price: 19995,
        quantity: 25,
        category: "women",
        brand: "Roxy",
        imageUrl: "https://www.rei.com/media/6db6ab4e-a0e1-447d-b1b7-f3c975ce979e.jpg"
    },
    {
        name: "Anakin Insulated Jacket - Kids'",
        description: "Keep your kids warm and dry down to -25° F in this Kamik Anakin insulated jacket. It offers waterproof/breathable protection and synthetic insulation that's built for wintry outdoor activities.",
        price: 8973,
        quantity: 25,
        category: "kids",
        brand: "Kamik",
        imageUrl: "https://www.rei.com/media/c37054f4-f444-430c-b88c-fcba14c649ee.jpg"
    },
    {
        name: "Max Insulated Jacket - Kids'",
        description: "Max protection and warmth is right. The Kamik Max jacket keeps kids comfy in temps down to -25° F, thanks to waterproof/breathable fabric and synthetic insulation built for wintry outdoor activities.",
        price: 8973,
        quantity: 25,
        category: "kids",
        brand: "Marmot",
        imageUrl: "https://www.rei.com/media/e30c967e-af2d-4fdc-8ba0-a7584796ff79.jpg"
    },
    {
        name: "Fordham II Down Jacket - Kids'",
        description: "Inspired by jackets made for grown ups, the kids' waterproof Marmot Fordham II down jacket offers the high-performance features necessary to keep any mini adventurer comfortable.",
        price: 13473,
        quantity: 25,
        category: "kids",
        brand: "Marmot",
        imageUrl: "https://www.rei.com/media/09e3956f-0421-4165-8f0b-f3809aeacc48.jpg"
    },

    {
        name: "Highlander Down Jacket - Kids'",
        description: "Don't let frigid temps and cold swirling winds ruin their day on the slopes or on the way to school. With the puffy Marmot Highlander down jacket they'll stay warm and comfortable.",
        price: 9973,
        quantity: 25,
        category: "kids",
        brand: "Marmot",
        imageUrl: "https://www.rei.com/media/ad09cf86-082c-44e0-997c-08fab0fa6618.jpg"
    },    
    {
        name: "Precip Eco Insulated Jacket - Kids'",
        description: "descrIdeal for daily wear and spring ski trips, the kids' Marmot PreCip Eco insulated jacket offers full weather protection and lightweight warmth.iption",
        price: 7973,
        quantity: 25,
        category: "kids",
        brand: "Marmot",
        imageUrl: "https://www.rei.com/media/f5ec78d9-3b30-4ad0-8ffc-afbd3d5e1eef.jpg"
    },  
]


module.exports = productsArray;