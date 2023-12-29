export type Category = {
    name: string;
    slug: string;
    description?: string;
    items: Item[];
};

export type Item = {
    name: string;
    slug: string;
    description?: string;
    calorie: number;
};

export const menu: Category[] = [
    {
        name: 'Breakfast',
        slug: 'breakfast',
        description: 'Breakfast items',
        items: [
            {
                name: "Bacon, Egg & Cheese Biscuit",
                slug: "bacon-egg-cheese-biscuit",
                description: "The McDonald's Bacon, Egg & Cheese Biscuit breakfast sandwich features a warm, buttermilk biscuit brushed with real butter, thick cut Applewood smoked bacon, a fluffy folded egg, and a slice of melty American cheese. ",
                calorie: 460,
            },
            {
                name: "Egg McMuffin®",
                slug: "egg-mcmuffin",
                description: "Satisfy your McDonald's breakfast cravings with our Egg McMuffin® breakfast sandwich—it’s an excellent source of protein and oh so delicious. McDonald's Egg McMuffin® recipe features a freshly cracked Grade A egg placed on a toasted English Muffin topped with real butter, lean Canadian bacon, and melty American cheese. There are 310 calories in an Egg McMuffin® from McDonald’s.",
                calorie: 310,
            },
            {
                name: "Hotcakes",
                slug: "hotcakes",
                description: "If you love hot pancakes, you've got to try McDonald's Hotcakes with a side of real butter and sweet maple flavored Hotcake syrup. This McDonald's breakfast comes with 3 golden brown Hotcakes. There are 580 calories in McDonald's Hotcakes. Order them with a Premium Roast Coffee for the perfect breakfast combo.",
                calorie: 580,
            },
            // {
            //     name: "",
            //     slug: "",
            //     description: "",
            //     calorie: 0,
            // },
            // {
            //     name: "",
            //     slug: "",
            //     description: "",
            //     calorie: 0,
            // },
            // {
            //     name: "",
            //     slug: "",
            //     description: "",
            //     calorie: 0,
            // },
            // {
            //     name: "",
            //     slug: "",
            //     description: "",
            //     calorie: 0,
            // },
            // {
            //     name: "",
            //     slug: "",
            //     description: "",
            //     calorie: 0,
            // },
        ],
    },
    {
        name: 'Burgers',
        slug: 'burgers',
        description: 'Delicious burgers',
        items: [
            {
                name: "Big Mac®",
                slug: "big-mac",
                description: "Ever wondered what's on a Big Mac®? The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese. It contains no artificial flavors, preservatives, or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
                calorie: 590,
            },
            {
                name: "Quarter Pounder®* with Cheese",
                slug: "quarter-pounder-with-cheese",
                description: "Each Quarter Pounder with Cheese burger features a ¼ lb.* of 100% fresh beef that’s hot, deliciously juicy and cooked when you order. What comes on a Quarter Pounder? Each fresh beef burger is seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun. Our QPC® contains no artificial flavors, preservatives or added colors from artificial sources.^ Our pickle contains an artificial preservative, so skip it if you like. A Quarter Pounder with Cheese has 520 Calories.",
                calorie: 520,
            },
            {
                name: "Double Quarter Pounder®* with Cheese",
                slug: "double-quarter-pounder-with-cheese",
                description: "Each Double Quarter Pounder with Cheese features two quarter pound* 100% fresh beef burger patties that are hot, deliciously juicy and cooked when you order. McDonald’s beef patties are seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty cheese on a sesame seed bun. It contains no artificial flavors, preservatives or added colors from artificial sources.** Our pickle contains an artificial preservative, so skip it if you like.",
                calorie: 740,
            },
            {
                name: "McDouble®",
                slug: "mcdouble",
                description: "The classic McDouble burger stacks two 100% pure beef patties seasoned with just a pinch of salt and pepper. Wondering what the difference is between a McDouble and a Double Cheeseburger? A slice of cheese! What comes on a McDouble? Well, it’s topped with tangy pickles, chopped onions, ketchup, mustard and a melty slice of American cheese. There are 400 calories in a McDouble. The McDouble contains no artificial flavors, preservatives or added colors from artificial sources.* Our pickle contains an artificial preservative, so skip it if you like.",
                calorie: 400,
            },
        ],
    },
    {
        name: 'Chicken & Fish sandwiches',
        slug: 'sandwiches',
        description: 'Any sandwich that is not burger',
        items: []
    },
    {
        name: 'McNuggets® and Meals',
        slug: 'nuggets',
        description: 'McNuggets® and Meals',
        items: []
    },
    {
        name: 'Fries® & Sides',
        slug: 'sides',
        description: 'Fries® & Sides',
        items: []
    },
    {
        name: 'Happy Meal®',
        slug: 'happymeals',
        description: 'Happy Meal®',
        items: []
    },
];