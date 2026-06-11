// Product Database and Dynamic Visual Asset Generators for Tweens Global

const PRODUCTS_DATA = [
    {
        "id": "if-sb-15-1pc",
        "name": "Invisi-Fit Cotton Non-Padded Plus-Size Bonded Bra (IF-SB-15-1PC)",
        "category": "bonded-bras",
        "description": "Designed for enhanced support and natural comfort for fuller busts, the Invisi-Fit Cotton Non-Padded Plus-Size Bonded Bra offers a secure fit with a smooth, invisible finish.\n\nCrafted using bonded technology, it features an elastic-free bottom band and side wings that sit gently on the skin-ensuring no digging, no red marks, and all-day irritation-free comfort.\n\nThe no-stitch seamless design keeps the bra invisible under clothing, giving you a clean and polished look.\n\nThe non-padded design with hidden concealer maintains a natural shape while preventing show-through for added confidence.\n\nThe full coverage cups with broad side wings provide enhanced support, better weight distribution, and prevent spillage-making it ideal for plus-size comfort and stability.\n\nMade from skin-friendly breathable cotton fabric that absorbs sweat well, it keeps you cool and comfortable throughout the day.\n\nThe wire-free construction ensures ease of movement while delivering reliable support.Perfect for everyday wear, this bra offers secure support, breathable comfort, and a smooth invisible fit all day.",
        "details": [
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Crafted with Bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
            "Broad Side wings with Internal Gripper for full coverage and secure fit.",
            "Built from premium cotton spandex fabric, breathable all day.",
            "Crafted with bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
            "Elastic-free underbust and armholes offer whole-day comfort without any digging or red marks."
        ],
        "sizes": [
            "32C",
            "32D",
            "32E",
            "34C",
            "34D",
            "34E",
            "34F",
            "36C",
            "36D",
            "36E",
            "36F",
            "38C",
            "38D",
            "38E",
            "38F",
            "40C",
            "40D",
            "40E",
            "42C",
            "42D",
            "42E",
            "44C",
            "44D",
            "44E",
            "46C",
            "46D"
        ],
        "colors": [
            {
                "name": "BLACK",
                "hex": "#1A1A1A",
                "image": "https://i.postimg.cc/MKKpB8mY/1.jpg",
                "images": [
                    "https://i.postimg.cc/MKKpB8mY/1.jpg",
                    "https://i.postimg.cc/vHqHLS0L/2.jpg",
                    "https://i.postimg.cc/ZK7KFDw8/3.jpg",
                    "https://i.postimg.cc/RVsVQbg1/4.jpg",
                    "https://i.postimg.cc/Qx4xknfp/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "CORAL",
                "hex": "#FF7F50",
                "image": "https://i.postimg.cc/TP8xt8gN/1.jpg",
                "images": [
                    "https://i.postimg.cc/TP8xt8gN/1.jpg",
                    "https://i.postimg.cc/ZqrSgfLS/2.jpg",
                    "https://i.postimg.cc/Pqmjc6Mq/3.jpg",
                    "https://i.postimg.cc/9fGhSxB0/4.jpg",
                    "https://i.postimg.cc/CKjgtv4p/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "FAWN",
                "hex": "#E3C59E",
                "image": "https://i.postimg.cc/X7p03Ngm/1.jpg",
                "images": [
                    "https://i.postimg.cc/X7p03Ngm/1.jpg",
                    "https://i.postimg.cc/y8R4gft9/2.jpg",
                    "https://i.postimg.cc/9Q95RxKt/3.jpg",
                    "https://i.postimg.cc/zf1mnCYg/4.jpg",
                    "https://i.postimg.cc/nhmbjdgV/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "NAVY",
                "hex": "#1A2E4C",
                "image": "https://i.postimg.cc/1R7LWhZs/1.jpg",
                "images": [
                    "https://i.postimg.cc/1R7LWhZs/1.jpg",
                    "https://i.postimg.cc/7YCjdsxM/2.jpg",
                    "https://i.postimg.cc/DyWRHj2c/3.jpg",
                    "https://i.postimg.cc/gkw1QSY4/4.jpg",
                    "https://i.postimg.cc/NfyZSJgR/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "SKIN",
                "hex": "#E8C3A9",
                "image": "https://i.postimg.cc/8CTKptVK/1.jpg",
                "images": [
                    "https://i.postimg.cc/8CTKptVK/1.jpg",
                    "https://i.postimg.cc/KYmqGJ2z/2.jpg",
                    "https://i.postimg.cc/g0GSzNWr/3.jpg",
                    "https://i.postimg.cc/JhR6rPL0/4.jpg",
                    "https://i.postimg.cc/jjRgxZbj/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WHITE",
                "hex": "#FFFFFF",
                "image": "https://i.postimg.cc/N0G3JgLD/1.jpg",
                "images": [
                    "https://i.postimg.cc/N0G3JgLD/1.jpg",
                    "https://i.postimg.cc/0NtLhLJC/2.jpg",
                    "https://i.postimg.cc/MGshghjD/3.jpg",
                    "https://i.postimg.cc/LsyrGrZx/4.jpg",
                    "https://i.postimg.cc/nLd6N6QS/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WINE",
                "hex": "#722F37",
                "image": "https://i.postimg.cc/ZqqQPVDv/1.jpg",
                "images": [
                    "https://i.postimg.cc/ZqqQPVDv/1.jpg",
                    "https://i.postimg.cc/GppfPqSN/2.jpg",
                    "https://i.postimg.cc/q7Z51y9L/3.jpg",
                    "https://i.postimg.cc/yNrbLcwj/4.jpg",
                    "https://i.postimg.cc/5ttr5nkT/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Light",
            "wire": "Underwire",
            "coverage": "Balconette",
            "fabric": "75% Cotton, 15% Nylon, 10% Wool"
        }
    },
    {
        "id": "if-sb-18-1pc",
        "name": "Invisi-Fit Cotton Padded Plus-Size Bonded Bra (IF-SB-18-1PC)",
        "category": "bonded-bras",
        "description": "Designed for enhanced support with smooth shaping for fuller busts, the Invisi-Fit Cotton Padded Plus-Size Bonded Bra delivers comfort and confidence for everyday wear.\n\nCrafted using bonded technology, it features an elastic-free bottom band and side wings that sit gently on the skin-ensuring no digging, no red marks, and all-day irritation-free comfort.\n\nThe no-stitch seamless design keeps the bra invisible under clothing, offering a clean and polished look.\n\nThe padded cups provide gentle lift and shaping while maintaining a natural silhouette.\n\nThe full coverage design with broad side wings ensures a secure fit, prevents spillage, and supports better weight distribution-ideal for plus-size needs and long-hour comfort.\n\nMade from skin-friendly breathable cotton fabric that absorbs sweat well, it keeps you cool and fresh throughout the day.\n\nThe wire-free construction adds ease of movement while delivering reliable support.Perfect for everyday wear, this bra offers support, shaping, and breathable comfort with an invisible finish all day.",
        "details": [
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Crafted with Bonded, no-stitch technology, it stays seamless under outfits for a flawless look."
        ],
        "sizes": [
            "32C",
            "32D",
            "32E",
            "34C",
            "34D",
            "34E",
            "34F",
            "36C",
            "36D",
            "36E",
            "36F",
            "38C",
            "38D",
            "38E",
            "38F",
            "40C",
            "40D",
            "40E",
            "42C",
            "42D",
            "42E",
            "44C",
            "44D",
            "44E",
            "46C",
            "46D"
        ],
        "colors": [
            {
                "name": "BLACK",
                "hex": "#1A1A1A",
                "image": "https://i.postimg.cc/xC9TfrsB/1.jpg",
                "images": [
                    "https://i.postimg.cc/xC9TfrsB/1.jpg",
                    "https://i.postimg.cc/8kKPS0L5/2.jpg",
                    "https://i.postimg.cc/FFWs4B0z/3.jpg",
                    "https://i.postimg.cc/3rSJTc2k/4.jpg",
                    "https://i.postimg.cc/vTNQt4QR/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "CORAL",
                "hex": "#FF7F50",
                "image": "https://i.postimg.cc/tgkGzs5T/1.jpg",
                "images": [
                    "https://i.postimg.cc/tgkGzs5T/1.jpg",
                    "https://i.postimg.cc/SKdbGnrt/2.jpg",
                    "https://i.postimg.cc/ZRqtsJ78/3.jpg",
                    "https://i.postimg.cc/1zB1K8HW/4.jpg",
                    "https://i.postimg.cc/1zB1K8HC/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "FAWN",
                "hex": "#E3C59E",
                "image": "https://i.postimg.cc/wB6S36pY/1.jpg",
                "images": [
                    "https://i.postimg.cc/wB6S36pY/1.jpg",
                    "https://i.postimg.cc/LsNG1r9q/2.jpg",
                    "https://i.postimg.cc/KYZd4Z23/3.jpg",
                    "https://i.postimg.cc/GpcZ9cCD/4.jpg",
                    "https://i.postimg.cc/PqtBNtjL/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "NAVY",
                "hex": "#1A2E4C",
                "image": "https://i.postimg.cc/jqwdRhc8/1.jpg",
                "images": [
                    "https://i.postimg.cc/jqwdRhc8/1.jpg",
                    "https://i.postimg.cc/J7D4RQKW/2.jpg",
                    "https://i.postimg.cc/pVhXPBkH/3.jpg",
                    "https://i.postimg.cc/447NX1wG/4.jpg",
                    "https://i.postimg.cc/2jb8CxTN/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "SKIN",
                "hex": "#E8C3A9",
                "image": "https://i.postimg.cc/TwZxKZ0B/1.jpg",
                "images": [
                    "https://i.postimg.cc/TwZxKZ0B/1.jpg",
                    "https://i.postimg.cc/GtGCGqSB/2.jpg",
                    "https://i.postimg.cc/8cMSMtn6/3.jpg",
                    "https://i.postimg.cc/XqdbdQD9/4.jpg",
                    "https://i.postimg.cc/cCwSwX5H/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WHITE",
                "hex": "#FFFFFF",
                "image": "https://i.postimg.cc/wM6VQBwz/1.jpg",
                "images": [
                    "https://i.postimg.cc/wM6VQBwz/1.jpg",
                    "https://i.postimg.cc/0jcCWq4Z/2.jpg",
                    "https://i.postimg.cc/4yB1LT02/3.jpg",
                    "https://i.postimg.cc/cCXc9Nz5/4.jpg",
                    "https://i.postimg.cc/yxvTQzGX/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WINE",
                "hex": "#722F37",
                "image": "https://i.postimg.cc/pdHnF6GH/1.jpg",
                "images": [
                    "https://i.postimg.cc/pdHnF6GH/1.jpg",
                    "https://i.postimg.cc/GpCsy579/2.jpg",
                    "https://i.postimg.cc/XvbyCzHJ/3.jpg",
                    "https://i.postimg.cc/g0W6ZTSj/4.jpg",
                    "https://i.postimg.cc/W4vJkHWb/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "RED",
                "hex": "#C0392B",
                "image": "https://i.postimg.cc/KzLGDG1c/1.jpg",
                "images": [
                    "https://i.postimg.cc/KzLGDG1c/1.jpg",
                    "https://i.postimg.cc/brhz67nk/2.jpg",
                    "https://i.postimg.cc/j2bs8pf7/3.jpg",
                    "https://i.postimg.cc/zvrJdshW/4.jpg",
                    "https://i.postimg.cc/PJjt6gDL/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Light",
            "wire": "Underwire",
            "coverage": "Balconette",
            "fabric": "75% Cotton, 15% Nylon, 10% Wool"
        }
    },
    {
        "id": "if-sb-203-1pc",
        "name": "Invisi-Fit Cotton Padded Non-Wired Minimiser Bonded Bra (IF-SB-203-1PC)",
        "category": "bonded-bras",
        "description": "Designed to deliver balanced shaping with a visibly minimised silhouette, the Invisi-Fit Cotton Padded Minimiser Bonded Bra offers smooth support with all-day comfort.\n\nCrafted using bonded technology, it features an elastic-free bottom band and side wings that sit gently on the skin-ensuring no digging, no red marks, and irritation-free wear.\n\nThe no-stitch seamless design provides a clean, smooth finish, keeping the bra invisible under fitted outfits.\n\nThe M-frame minimiser construction with light padding helps distribute bust volume evenly, creating a more refined and balanced look without compromising on comfort.\n\nThe full coverage cups ensure a secure fit with no spillage, offering reliable support for everyday wear.\n\nMade from skin-friendly breathable cotton fabric that absorbs sweat well, it keeps you cool and comfortable throughout the day.\n\nThe wire-free design enhances ease of movement while maintaining gentle support.Perfect for everyday wear and structured outfits, this bra offers balanced shaping, breathable comfort, and invisible support all day.",
        "details": [
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Elastic-free underbust and armholes offer whole-day comfort without any digging or red marks.",
            "Crafted with Bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
            "Built from premium cotton spandex fabric, breathable during workouts.",
            "Crafted to minimise the bust appearance by upto one side for a refined look.",
            "M-frame neckline with lightly padded cups prevents top spillage and gives sleek shape"
        ],
        "sizes": [
            "34C",
            "34D",
            "34E",
            "36C",
            "36D",
            "36E",
            "38C",
            "38D",
            "38E",
            "40C",
            "40D",
            "40E",
            "42C",
            "42D",
            "42E",
            "44C",
            "44D",
            "46C"
        ],
        "colors": [
            {
                "name": "BLACK",
                "hex": "#1A1A1A",
                "image": "https://i.postimg.cc/Pq3DFg1b/1.jpg",
                "images": [
                    "https://i.postimg.cc/Pq3DFg1b/1.jpg",
                    "https://i.postimg.cc/G24D0Xj7/2.jpg",
                    "https://i.postimg.cc/hjXmF205/3.jpg",
                    "https://i.postimg.cc/Y9vFcdxD/4.jpg",
                    "https://i.postimg.cc/vB4nR0v3/5.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "FAWN",
                "hex": "#E3C59E",
                "image": "https://i.postimg.cc/gjvndQLn/1.jpg",
                "images": [
                    "https://i.postimg.cc/gjvndQLn/1.jpg",
                    "https://i.postimg.cc/T1rpGF5m/2.jpg",
                    "https://i.postimg.cc/kGxB9zRW/3.jpg",
                    "https://i.postimg.cc/qq8z0S6y/4.jpg",
                    "https://i.postimg.cc/RhcN9yJH/5.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "SKIN",
                "hex": "#E8C3A9",
                "image": "https://i.postimg.cc/d1C0mp6K/1.jpg",
                "images": [
                    "https://i.postimg.cc/d1C0mp6K/1.jpg",
                    "https://i.postimg.cc/mkGgdjpR/2.jpg",
                    "https://i.postimg.cc/mkGgdjpZ/3.jpg",
                    "https://i.postimg.cc/Gt1mMKg2/4.jpg",
                    "https://i.postimg.cc/cCNLDhkS/5.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WINE",
                "hex": "#722F37",
                "image": "https://i.postimg.cc/qqL41T3p/1.jpg",
                "images": [
                    "https://i.postimg.cc/qqL41T3p/1.jpg",
                    "https://i.postimg.cc/SNSyJJwd/2.jpg",
                    "https://i.postimg.cc/15m9ffLv/3.jpg",
                    "https://i.postimg.cc/VLfYdd37/4.jpg",
                    "https://i.postimg.cc/RCQSScb2/5.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Light",
            "wire": "Underwire",
            "coverage": "Balconette",
            "fabric": "75% Cotton, 15% Nylon, 10% Wool"
        }
    },
    {
        "id": "if-sb-303-1pc",
        "name": "Invisi-Fit Cotton Non-Padded Non-Wired Minimiser Bonded Bra (IF-SB-303-1PC)",
        "category": "bonded-bras",
        "description": "Designed to deliver balanced shaping with a naturally minimised silhouette, the Invisi-Fit Cotton Non-Padded Minimiser Bonded Bra offers everyday comfort with reliable support.\n\nCrafted using bonded technology, it features an elastic-free bottom band and side wings that sit gently on the skin-ensuring no digging, no red marks, and irritation-free wear.\n\nThe no-stitch seamless design provides a smooth finish, keeping the bra invisible under fitted outfits.\n\nThe M-frame minimiser construction with a non-padded design and hidden concealer helps distribute bust volume evenly while preventing show-through, creating a refined and natural look.\n\nThe full coverage cups ensure a secure fit with no spillage, offering dependable support for long hours.\n\nMade from skin-friendly breathable cotton fabric that absorbs sweat well, it keeps you cool and comfortable throughout the day.\n\nThe wire-free design enhances ease of movement while maintaining gentle support.\n\nPerfect for everyday wear and structured outfits, this bra offers natural shaping, breathable comfort, and invisible support all day.",
        "details": [
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Elastic-free underbust and armholes offer whole-day comfort without any digging or red marks.",
            "Crafted with Bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
            "Built from premium cotton spandex fabric, breathable during workouts.",
            "Hidden Concealer over the cup area for no apex show.",
            "M-frame neckline prevents top spillage and ensures high coverage."
        ],
        "sizes": [
            "34C",
            "34D",
            "34E",
            "36C",
            "36D",
            "36E",
            "38C",
            "38D",
            "38E",
            "40C",
            "40D",
            "40E",
            "42C",
            "42D",
            "42E",
            "44C",
            "44D",
            "46C"
        ],
        "colors": [
            {
                "name": "BLACK",
                "hex": "#1A1A1A",
                "image": "https://i.postimg.cc/HxQF41J9/1.jpg",
                "images": [
                    "https://i.postimg.cc/HxQF41J9/1.jpg",
                    "https://i.postimg.cc/FzN8TC3X/2.jpg",
                    "https://i.postimg.cc/brpWmVkh/3.jpg",
                    "https://i.postimg.cc/SRk3g1C4/4.jpg",
                    "https://i.postimg.cc/5ybTsKvT/5.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "FAWN",
                "hex": "#E3C59E",
                "image": "https://i.postimg.cc/3wGqYQFC/1.jpg",
                "images": [
                    "https://i.postimg.cc/3wGqYQFC/1.jpg",
                    "https://i.postimg.cc/JhXFMC56/2.jpg",
                    "https://i.postimg.cc/R0tY4xLP/3.jpg",
                    "https://i.postimg.cc/cJ3z0GBk/4.jpg",
                    "https://i.postimg.cc/0NS4P10c/5.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "SKIN",
                "hex": "#E8C3A9",
                "image": "https://i.postimg.cc/vT0q3YGT/1.jpg",
                "images": [
                    "https://i.postimg.cc/vT0q3YGT/1.jpg",
                    "https://i.postimg.cc/zD7cJjKx/2.jpg",
                    "https://i.postimg.cc/hv2ypDK8/3.jpg",
                    "https://i.postimg.cc/HWzhp2XN/4.jpg",
                    "https://i.postimg.cc/5ys7n4fB/5.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WINE",
                "hex": "#722F37",
                "image": "https://i.postimg.cc/CxBPspXY/1.jpg",
                "images": [
                    "https://i.postimg.cc/CxBPspXY/1.jpg",
                    "https://i.postimg.cc/4x7LQRqh/2.jpg",
                    "https://i.postimg.cc/13nCr12q/3.jpg",
                    "https://i.postimg.cc/W1B99fcz/4.jpg",
                    "https://i.postimg.cc/MpMPmJNR/5.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Light",
            "wire": "Underwire",
            "coverage": "Balconette",
            "fabric": "75% Cotton, 15% Nylon, 10% Wool"
        }
    },
    {
        "id": "if-sb-35-1pc",
        "name": "Invisi-Fit Cotton Non- Padded Bonded Bra (IF-SB-35-1PC)",
        "category": "bonded-bras",
        "description": "Designed for natural shaping and breathable everyday comfort, the Invisi-Fit Cotton Non-Padded Bonded Bra offers a smooth, effortless fit under every outfit.\n\nCrafted using bonded technology, it features an elastic-free bottom band and side wings that sit gently on the skin&mdash;ensuring no digging, no red marks, and all-day irritation-free comfort.\n\nThe no-stitch seamless design creates a smooth finish, making the bra completely invisible even under fitted clothing.\n\nThe non-padded construction with hidden concealer provides a natural look while preventing show-through, offering confidence without added bulk.\n\nThe full coverage cups ensure a secure fit with broad side wings that prevent spillage and provide reliable support throughout the day.\n\nMade from skin-friendly breathable cotton fabric that absorbs sweat well, it keeps you cool and comfortable, especially during long hours or warmer days.\n\nThe wire-free design enhances ease of movement while maintaining gentle support.\nPerfect for effortless daily wear, this bra delivers natural comfort with smooth, invisible support all day.",
        "details": [
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Crafted with Bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
            "Elastic-free underbust and armholes offer whole-day comfort without any digging or red marks.",
            "Built from premium cotton spandex fabric, breathable all day.",
            "W-hold design for enhanced support and shape without added bulk.",
            "Seamless sidewings with an internal gripper to avoid rolling and offer a secure fit."
        ],
        "sizes": [
            "28B",
            "30A",
            "30B",
            "30C",
            "30D",
            "32A",
            "32B",
            "32C",
            "32D",
            "34A",
            "34B",
            "34C",
            "34D",
            "36A",
            "36B",
            "36C",
            "36D",
            "38A",
            "38B",
            "38C",
            "38D",
            "40A",
            "40B",
            "40C"
        ],
        "colors": [
            {
                "name": "SKIN",
                "hex": "#E8C3A9",
                "image": "https://i.postimg.cc/qqZJrk7L/1-(3).jpg",
                "images": [
                    "https://i.postimg.cc/qqZJrk7L/1-(3).jpg",
                    "https://i.postimg.cc/sfnD7J48/2-(3).jpg",
                    "https://i.postimg.cc/dQWtr9jx/3-(3).jpg",
                    "https://i.postimg.cc/NFPstg0D/4-(2).jpg",
                    "https://i.postimg.cc/ZnDbmTqy/5-(2).jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "BLACK",
                "hex": "#1A1A1A",
                "image": "https://i.postimg.cc/85BrBrzK/1.jpg",
                "images": [
                    "https://i.postimg.cc/85BrBrzK/1.jpg",
                    "https://i.postimg.cc/3N80LJkf/2.jpg",
                    "https://i.postimg.cc/FzrkPsYn/3.jpg",
                    "https://i.postimg.cc/vTYxPH4N/4.jpg",
                    "https://i.postimg.cc/XqjB27r2/5.jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "CORAL",
                "hex": "#FF7F50",
                "image": "https://i.postimg.cc/wxF3Fz99/1-(2).jpg",
                "images": [
                    "https://i.postimg.cc/wxF3Fz99/1-(2).jpg",
                    "https://i.postimg.cc/QCNCs4kz/2-(2).jpg",
                    "https://i.postimg.cc/zvDv5tS2/3-(2).jpg",
                    "https://i.postimg.cc/hv4vgyb3/4-(1).jpg",
                    "https://i.postimg.cc/L545RCBV/5-(1).jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "FAWN",
                "hex": "#E3C59E",
                "image": "https://i.postimg.cc/PJMDQvKM/1.jpg",
                "images": [
                    "https://i.postimg.cc/PJMDQvKM/1.jpg",
                    "https://i.postimg.cc/QCq7JKSz/2.jpg",
                    "https://i.postimg.cc/VvFtW04V/3.jpg",
                    "https://i.postimg.cc/j2hf4nv9/4.jpg",
                    "https://i.postimg.cc/7hNznJXt/5.jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "NAVY",
                "hex": "#1A2E4C",
                "image": "https://i.postimg.cc/4NBtKtY6/1.jpg",
                "images": [
                    "https://i.postimg.cc/4NBtKtY6/1.jpg",
                    "https://i.postimg.cc/282vqv1G/2.jpg",
                    "https://i.postimg.cc/HsB5J5r3/3.jpg",
                    "https://i.postimg.cc/DyBsWsSB/4.jpg",
                    "https://i.postimg.cc/NfpTyTK4/5.jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WHITE",
                "hex": "#FFFFFF",
                "image": "https://i.postimg.cc/kgHbsmFJ/1.jpg",
                "images": [
                    "https://i.postimg.cc/kgHbsmFJ/1.jpg",
                    "https://i.postimg.cc/T3sD06qK/2.jpg",
                    "https://i.postimg.cc/Cx2q7gHd/3.jpg",
                    "https://i.postimg.cc/8zY64SBj/4.jpg",
                    "https://i.postimg.cc/8zY64SB5/5.jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WINE",
                "hex": "#722F37",
                "image": "https://i.postimg.cc/j50JV41b/1.jpg",
                "images": [
                    "https://i.postimg.cc/j50JV41b/1.jpg",
                    "https://i.postimg.cc/3R5DMFq8/2.jpg",
                    "https://i.postimg.cc/NMqrhknG/3.jpg",
                    "https://i.postimg.cc/63JGsfP5/4.jpg",
                    "https://i.postimg.cc/d1PTMjfq/5.jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Light",
            "wire": "Underwire",
            "coverage": "Balconette",
            "fabric": "75% Cotton, 15% Nylon, 10% Wool"
        }
    },
    {
        "id": "if-sb-3510-1pc-ai0426-same-parent",
        "name": "Invisi-Fit Cotton Push-Up Bonded Bra (Level-3 Padding) (IF-SB-3510-1PC-AI0426-SAME-PARENT)",
        "category": "bonded-bras",
        "description": "Designed to deliver enhanced lift and fuller shaping, the Invisi-Fit Cotton Push-Up Bonded Bra with Level-3 padding gives you a visibly defined silhouette with confident support.\n\nCrafted using bonded technology, it features an elastic-free bottom band and side wings that sit gently on the skin&mdash;no digging, no red marks, and all-day irritation-free comfort.\n\nThe no-stitch seamless design ensures a smooth, invisible finish under fitted outfits for a clean, polished look.\n\nThe Level-3 push-up padding is designed to significantly lift and enhance the bust, creating a fuller appearance by up to 2 cup sizes.\n\nThe 3/4th coverage cups enhance cleavage while offering a secure and flattering fit, making it ideal for deeper necklines and styled outfits.\n\nMade from skin-friendly breathable cotton fabric that absorbs sweat well, it keeps you cool and comfortable throughout the day.\n\nThe wire-free construction adds ease while maintaining supportive shaping.Perfect for both special outfits and statement everyday looks, this bra offers lift, comfort, and invisible support in one.\n\nMade from skin-friendly breathable cotton fabric that absorbs sweat well, it keeps you cool and comfortable, especially during long hours or warmer days.\n\nThe wire-free design enhances ease of movement while maintaining gentle support.\n\nPerfect for effortless daily wear, this bra delivers natural comfort with smooth, invisible support all day.",
        "details": [
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Crafted with Bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
            "Crafted with bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
            "Built from premium cotton spandex fabric, breathable all day.",
            "Level-3 Padding gives a fuller and rounder appearance, enhancing the bust appearance by 2 cup sizes.",
            "3/4th coverage enhances cleavage & lift, giving a fuller look."
        ],
        "sizes": [
            "30B",
            "32B",
            "34B",
            "36B",
            "38B"
        ],
        "colors": [
            {
                "name": "BLACK",
                "hex": "#1A1A1A",
                "image": "https://i.postimg.cc/ncVtWc6X/1.jpg",
                "images": [
                    "https://i.postimg.cc/ncVtWc6X/1.jpg",
                    "https://i.postimg.cc/MKZ8LKht/2.jpg",
                    "https://i.postimg.cc/ZKYhQK1V/3.jpg",
                    "https://i.postimg.cc/J47WF49p/4.jpg",
                    "https://i.postimg.cc/5N9MrNZm/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "FAWN",
                "hex": "#E3C59E",
                "image": "https://i.postimg.cc/zBYsFJCn/1.jpg",
                "images": [
                    "https://i.postimg.cc/zBYsFJCn/1.jpg",
                    "https://i.postimg.cc/xCGWsW5P/2.jpg",
                    "https://i.postimg.cc/d1RzWz66/3.jpg",
                    "https://i.postimg.cc/cH7VDVhm/4.jpg",
                    "https://i.postimg.cc/V6PxWYqV/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "SKIN",
                "hex": "#E8C3A9",
                "image": "https://i.postimg.cc/zBYsFJCn/1.jpg",
                "images": [
                    "https://i.postimg.cc/zBYsFJCn/1.jpg",
                    "https://i.postimg.cc/xCGWsW5P/2.jpg",
                    "https://i.postimg.cc/d1RzWz66/3.jpg",
                    "https://i.postimg.cc/cH7VDVhm/4.jpg",
                    "https://i.postimg.cc/V6PxWYqV/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WINE",
                "hex": "#722F37",
                "image": "https://i.postimg.cc/cLV2ds5k/1.jpg",
                "images": [
                    "https://i.postimg.cc/cLV2ds5k/1.jpg",
                    "https://i.postimg.cc/vZ1CR1X7/2.jpg",
                    "https://i.postimg.cc/BndkJqwc/3.jpg",
                    "https://i.postimg.cc/9QvKcWNB/4.jpg",
                    "https://i.postimg.cc/t41801Dm/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "RED",
                "hex": "#C0392B",
                "image": "https://i.postimg.cc/Kj08R9Kt/1.jpg",
                "images": [
                    "https://i.postimg.cc/Kj08R9Kt/1.jpg",
                    "https://i.postimg.cc/gjg2nMws/2.jpg",
                    "https://i.postimg.cc/mZjDXrmq/3.jpg",
                    "https://i.postimg.cc/3NtxdLy9/4.jpg",
                    "https://i.postimg.cc/rsfwKhdJ/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Light",
            "wire": "Underwire",
            "coverage": "Balconette",
            "fabric": "75% Cotton, 15% Nylon, 10% Wool"
        }
    },
    {
        "id": "if-sb-68-1pc",
        "name": "Tweens Polyamide Padded Bonded Bra (IF-SB-68-1PC)",
        "category": "bonded-bras",
        "description": "Designed for smooth shaping with a second-skin feel, the Invisi-Fit Polyamide Padded Bonded Bra delivers all-day comfort with an invisible finish under every outfit.\n\nCrafted using bonded technology, it features an elastic-free bottom band and side wings that sit gently on the skin-ensuring no digging, no red marks, and irritation-free comfort.\n\nThe no-stitch seamless design creates a smooth finish, keeping the bra invisible even under fitted clothing.\n\nThe lightly padded cups provide gentle lift and natural shaping, while the full coverage design ensures a secure fit with no spillage for confident everyday wear.\n\nMade from buttery-smooth polyamide fabric that feels like a second skin, it offers a sleek, lightweight finish that stays comfortable throughout the day.\n\nThe wire-free construction enhances ease of movement while maintaining reliable support.Perfect for everyday wear and fitted outfits, this bra offers smooth shaping, lightweight comfort, and invisible support all day.",
        "details": [
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Elastic-free underbust and armholes offer whole-day comfort without any digging or red marks."
        ],
        "sizes": [
            "30B",
            "30C",
            "30D",
            "32A",
            "32B",
            "32C",
            "32D",
            "34A",
            "34B",
            "34C",
            "34D",
            "36A",
            "36B",
            "36C",
            "36D",
            "38A",
            "38B",
            "38C",
            "38D",
            "40A",
            "40B",
            "40C",
            "40D"
        ],
        "colors": [
            {
                "name": "BLACK",
                "hex": "#1A1A1A",
                "image": "https://i.postimg.cc/9XPJkQQ5/1.jpg",
                "images": [
                    "https://i.postimg.cc/9XPJkQQ5/1.jpg",
                    "https://i.postimg.cc/fW7BPRRJ/2.jpg",
                    "https://i.postimg.cc/dQR4fVVT/3.jpg",
                    "https://i.postimg.cc/595nr22z/4.jpg",
                    "https://i.postimg.cc/ZYPVQ550/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "COFFEE",
                "hex": "#6F4E37",
                "image": "https://i.postimg.cc/Vv49k5JR/1.jpg",
                "images": [
                    "https://i.postimg.cc/Vv49k5JR/1.jpg",
                    "https://i.postimg.cc/2jx7w903/2.jpg",
                    "https://i.postimg.cc/G3jxQgXB/3.jpg",
                    "https://i.postimg.cc/wxkQV4ws/4.jpg",
                    "https://i.postimg.cc/v8vtz20m/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "ROSE",
                "hex": "#D07C82",
                "image": "https://i.postimg.cc/fWH0yGHg/1.jpg",
                "images": [
                    "https://i.postimg.cc/fWH0yGHg/1.jpg",
                    "https://i.postimg.cc/59PFyhPZ/2.jpg",
                    "https://i.postimg.cc/J7TB0f6V/3.jpg",
                    "https://i.postimg.cc/05tJjTWg/4.jpg",
                    "https://i.postimg.cc/L4yZ5cy7/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "SKIN",
                "hex": "#E8C3A9",
                "image": "https://i.postimg.cc/JhcsLvDq/1.jpg",
                "images": [
                    "https://i.postimg.cc/JhcsLvDq/1.jpg",
                    "https://i.postimg.cc/KYr12wk0/2.jpg",
                    "https://i.postimg.cc/25F1DMbH/3.jpg",
                    "https://i.postimg.cc/CKHRgXBr/4.jpg",
                    "https://i.postimg.cc/k5F2mz6w/5.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Light",
            "wire": "Underwire",
            "coverage": "Balconette",
            "fabric": "75% Cotton, 15% Nylon, 10% Wool"
        }
    },
    {
        "id": "if-sb-7015-1pc",
        "name": "Invisi-Fit Cotton Maximiser Push-Up Bonded Bra (Level-2 Padding) (IF-SB-7015-1PC)",
        "category": "bonded-bras",
        "description": "Designed to deliver a visibly fuller bust with enhanced lift, the Invisi-Fit Cotton Maximiser Push-Up Bonded Bra with Level-2 padding creates a naturally voluminous and defined silhouette.\n\nCrafted using bonded technology, it features an elastic-free bottom band and side wings that sit gently on the skin&mdash;ensuring no digging, no red marks, and all-day irritation-free comfort.\n\nThe no-stitch seamless design provides a smooth, invisible finish under fitted outfits for a clean, polished look.\n\nThe Level-2 maximiser padding enhances the bust by up to 1 cup size, offering lifted shaping without excessive bulk.\n\nThe 3/4th coverage cups enhance cleavage while maintaining a secure and flattering fit, making it ideal for deep necklines and styled outfits.\n\nMade from skin-friendly breathable cotton fabric that absorbs sweat well, it keeps you cool and comfortable throughout the day.\n\nThe internal grippers help prevent rolling or shifting, keeping the bra securely in place, while the wire-free construction ensures ease with reliable support.\n\nPerfect for statement styling and confident everyday wear, this bra offers lift, stability, and invisible comfort all day.",
        "details": [
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Crafted with Bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
            "Elastic-free underbust and armholes offer whole-day comfort without any digging or red marks.",
            "Built from premium cotton spandex fabric, breathable all day.",
            "Level-2 Padding provides a noticeable lift and give bust a fuller and rounder appearance.",
            "3/4th coverage enhances cleavage & lift, increasing the cup size by two size."
        ],
        "sizes": [
            "32B",
            "32C",
            "34B",
            "34C",
            "36B",
            "36C",
            "38B",
            "38C"
        ],
        "colors": [
            {
                "name": "BLACK",
                "hex": "#1A1A1A",
                "image": "https://i.postimg.cc/52rKQgpg/1.jpg",
                "images": [
                    "https://i.postimg.cc/52rKQgpg/1.jpg",
                    "https://i.postimg.cc/d0TH2CSm/2.jpg",
                    "https://i.postimg.cc/KYgqPTs5/3.jpg",
                    "https://i.postimg.cc/MGjP7BrD/4.jpg",
                    "https://i.postimg.cc/25BcQWX4/5.jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "FAWN",
                "hex": "#E3C59E",
                "image": "https://i.postimg.cc/0yZMVXhs/1.jpg",
                "images": [
                    "https://i.postimg.cc/0yZMVXhs/1.jpg",
                    "https://i.postimg.cc/Hk3c6vFW/2.jpg",
                    "https://i.postimg.cc/FHGdTCwK/3.jpg",
                    "https://i.postimg.cc/cLTgFkPH/4.jpg",
                    "https://i.postimg.cc/2STb09gS/5.jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "SKIN",
                "hex": "#E8C3A9",
                "image": "https://i.postimg.cc/GmN80Thd/1.jpg",
                "images": [
                    "https://i.postimg.cc/GmN80Thd/1.jpg",
                    "https://i.postimg.cc/9QSR3wF0/2.jpg",
                    "https://i.postimg.cc/9QSR3wFr/3.jpg",
                    "https://i.postimg.cc/y85gq3YD/4.jpg",
                    "https://i.postimg.cc/mgqzx12D/5.jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WINE",
                "hex": "#722F37",
                "image": "https://i.postimg.cc/dQBhsxty/1.jpg",
                "images": [
                    "https://i.postimg.cc/dQBhsxty/1.jpg",
                    "https://i.postimg.cc/nVkXFPcY/2.jpg",
                    "https://i.postimg.cc/qBLNJ5M1/3.jpg",
                    "https://i.postimg.cc/gcDxzTkS/4.jpg",
                    "https://i.postimg.cc/XN8rjz78/5.jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "RED",
                "hex": "#C0392B",
                "image": "https://i.postimg.cc/85H6mmJF/1.jpg",
                "images": [
                    "https://i.postimg.cc/85H6mmJF/1.jpg",
                    "https://i.postimg.cc/wvVmQQyy/2.jpg",
                    "https://i.postimg.cc/x81bxNM0/3.jpg",
                    "https://i.postimg.cc/Px4wQQpv/4.jpg",
                    "https://i.postimg.cc/ydPZyyg8/5.jpg",
                    "https://i.postimg.cc/d3sZWt7s/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Light",
            "wire": "Underwire",
            "coverage": "Balconette",
            "fabric": "75% Cotton, 15% Nylon, 10% Wool"
        }
    },
    {
        "id": "if-sb-95-1pc",
        "name": "Invisi-Fit Cotton Non-Padded Bonded Gym Bra (IF-SB-95-1PC)",
        "category": "bonded-bras",
        "description": "Designed for breathable comfort and secure support during movement, the Invisi-Fit Cotton Non-Padded Bonded Gym Bra keeps you supported through every activity.\n\nCrafted using bonded technology, it features an elastic-free bottom band and side wings that sit gently on the skin-ensuring no digging, no red marks, and irritation-free comfort even during long wear.\n\nThe no-stitch seamless design provides a smooth finish, keeping the bra invisible under workout and everyday outfits.\n\nBuilt for performance, the non-padded design with hidden concealer offers a natural shape while preventing show-through.\n\nThe full coverage cups ensure a secure fit with no spillage, while the crisscross back design provides enhanced support, stability, and better weight distribution during movement.\n\nMade from skin-friendly breathable cotton fabric that absorbs sweat well, it helps keep you cool and comfortable throughout workouts.\n\nThe wire-free construction allows flexibility while maintaining reliable support.Perfect for workouts and active days, this bra offers secure support, breathable comfort, and stay-in-place confidence all day.",
        "details": [
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Elastic-free underbust and armholes offer whole-day comfort without any digging or red marks.",
            "Crafted with Bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
            "Built from premium cotton spandex fabric, breathable during workouts.",
            "Crisscross Back for added Back support and posture correction.",
            "Front and back 3-level adjustable hook-eye closure for enhanced shape support."
        ],
        "sizes": [
            "30B",
            "30C",
            "30D",
            "32B",
            "32C",
            "32D",
            "34B",
            "34C",
            "34D",
            "36B",
            "36C",
            "36D",
            "38B",
            "38C",
            "38D",
            "40B",
            "40C",
            "40D"
        ],
        "colors": [
            {
                "name": "BLACK",
                "hex": "#1A1A1A",
                "image": "https://i.postimg.cc/zf8x8LXz/1.jpg",
                "images": [
                    "https://i.postimg.cc/zf8x8LXz/1.jpg",
                    "https://i.postimg.cc/bvpmpGNd/2.jpg",
                    "https://i.postimg.cc/1zsvsg5g/3.jpg",
                    "https://i.postimg.cc/VNmKmSL6/4.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "FAWN",
                "hex": "#E3C59E",
                "image": "https://i.postimg.cc/WzFnXgXT/1.jpg",
                "images": [
                    "https://i.postimg.cc/WzFnXgXT/1.jpg",
                    "https://i.postimg.cc/hvk0wv5F/2.jpg",
                    "https://i.postimg.cc/MHCY4HF2/3.jpg",
                    "https://i.postimg.cc/Kj65VjsC/4.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "SKIN",
                "hex": "#E8C3A9",
                "image": "https://i.postimg.cc/7LHjXtz1/1.jpg",
                "images": [
                    "https://i.postimg.cc/7LHjXtz1/1.jpg",
                    "https://i.postimg.cc/1zmbM7FJ/2.jpg",
                    "https://i.postimg.cc/0NkhZXSn/3.jpg",
                    "https://i.postimg.cc/CKh9Jr8N/4.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WINE",
                "hex": "#722F37",
                "image": "https://i.postimg.cc/W1PZJbbh/1.jpg",
                "images": [
                    "https://i.postimg.cc/W1PZJbbh/1.jpg",
                    "https://i.postimg.cc/0ydwGRzk/2.jpg",
                    "https://i.postimg.cc/x1yzGDX1/3.jpg",
                    "https://i.postimg.cc/Hk4y0DVK/4.jpg",
                    "https://i.postimg.cc/vHPdwwsP/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Light",
            "wire": "Underwire",
            "coverage": "Balconette",
            "fabric": "75% Cotton, 15% Nylon, 10% Wool"
        }
    },
    {
        "id": "if-sb-97-1pc",
        "name": "Invisi-Fit Cotton Padded Bonded Gym Bra (IF-SB-97-1PC)",
        "category": "bonded-bras",
        "description": "Designed for breathable comfort with secure support during movement, the Invisi-Fit Cotton Padded Bonded Gym Bra keeps you confident through every workout.\n\nCrafted using bonded technology, it features an elastic-free bottom band and side wings that sit gently on the skin-ensuring no digging, no red marks, and irritation-free comfort even during long hours.\n\nThe no-stitch seamless design provides a smooth finish, keeping the bra invisible under both activewear and everyday outfits.\n\nBuilt for performance, the lightly padded cups offer gentle shaping and support while maintaining a natural feel.\n\nThe full coverage design ensures a secure fit with no spillage, while the crisscross back support enhances stability, reduces bounce, and distributes weight evenly during movement.\n\nMade from skin-friendly breathable cotton fabric that absorbs sweat well, it keeps you cool and comfortable throughout workouts.\n\nThe wire-free construction allows flexibility while maintaining reliable support.Perfect for workouts and active days, this bra offers support, comfort, and stay-in-place confidence all day.",
        "details": [
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Breathable Leather Lining",
            "Elastic-free underbust and armholes offer whole-day comfort without any digging or red marks.",
            "Crafted with Bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
            "Built from premium cotton spandex fabric, breathable during workouts.",
            "Crisscross Back for added Back support and posture correction.",
            "Front and back 3-level adjustable hook-eye closure for enhanced shape support."
        ],
        "sizes": [
            "30B",
            "30C",
            "30D",
            "32B",
            "32C",
            "32D",
            "34B",
            "34C",
            "34D",
            "36B",
            "36C",
            "36D",
            "38B",
            "38C",
            "38D",
            "40B",
            "40C",
            "40D"
        ],
        "colors": [
            {
                "name": "BLACK",
                "hex": "#1A1A1A",
                "image": "https://i.postimg.cc/5tCX2h8z/1.jpg",
                "images": [
                    "https://i.postimg.cc/5tCX2h8z/1.jpg",
                    "https://i.postimg.cc/Pf4PJzvm/2.jpg",
                    "https://i.postimg.cc/pVZprY5Q/3.jpg",
                    "https://i.postimg.cc/Wpnhz6qk/4.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "FAWN",
                "hex": "#E3C59E",
                "image": "https://i.postimg.cc/9FDC2GdV/1.jpg",
                "images": [
                    "https://i.postimg.cc/9FDC2GdV/1.jpg",
                    "https://i.postimg.cc/tgjjFwLs/2.jpg",
                    "https://i.postimg.cc/KY22twdL/3.jpg",
                    "https://i.postimg.cc/x1HQJnFr/4.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "SKIN",
                "hex": "#E8C3A9",
                "image": "https://i.postimg.cc/pTScJnpj/1.jpg",
                "images": [
                    "https://i.postimg.cc/pTScJnpj/1.jpg",
                    "https://i.postimg.cc/xCZp3bXD/2.jpg",
                    "https://i.postimg.cc/26t97B1Y/3.jpg",
                    "https://i.postimg.cc/zBQ2FRV9/4.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "WINE",
                "hex": "#722F37",
                "image": "https://i.postimg.cc/W19y1Ks2/1.jpg",
                "images": [
                    "https://i.postimg.cc/W19y1Ks2/1.jpg",
                    "https://i.postimg.cc/6Qym20Q2/2.jpg",
                    "https://i.postimg.cc/1zfjnHzw/3.jpg",
                    "https://i.postimg.cc/vmcNgzmc/4.jpg",
                    "https://i.postimg.cc/445mybH5/6.jpg",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Light",
            "wire": "Underwire",
            "coverage": "Balconette",
            "fabric": "75% Cotton, 15% Nylon, 10% Wool"
        }
    },
    {
        "id": "sb-915",
        "name": "Tweens Bonded Breathable Cotton Plus-Size Full-Coverage Bra with Hidden Concealer (SB-915)",
        "category": "bonded-bras",
        "description": "Product Description\n\nThe Tweens Bonded Plus-Size Non-Padded Cotton Bra blends real comfort, full coverage, and a second-skin feel for all-day ease.\n\nAn elastic-free bottom band and armholes stop digging and marks, keeping movement easy whether you’re working, traveling, or relaxing.\n\nWide cotton shoulder straps spread weight gently, while broad side wings with an internal gripper stay put to tame side bulges.\n\nNon-padded, wire-free cups shape naturally, and breathable cotton fabric stays light in heat and humidity.\n\nThe seamless construction disappears under tees, kurtis, workwear, and casual fits, with a secure hook-and-eye back closure.\n\nKey Features\n\n\t*\n\nElastic-Free Band & Armhole – No Digging, No Marks\nEliminates elastic to prevent irritation, pinching, and red marks.\n\t*\n\nWide Cotton Shoulder Straps – Gentle on Skin\nBroad straps distribute weight evenly and stay soft on the shoulders.\n\t*\n\nBroad Side Wings with Internal Gripper – Secure Fit\nEnsures a snug hold and prevents side bulges for a smooth silhouette.\n\t*\n\nSoft Cotton Fabric & Seamless Construction – Daily Comfort\nBreathable, lightweight cotton with seamless design for invisible wear.\n\t*\n\nFull Coverage & Wire-Free Design – Natural Shaping\nNon-padded cups provide maximum coverage and a natural shape without bulk.",
        "details": [
            "Engineered using premium raw materials for everyday usage",
            "Provides pressure-free hold and lifts naturally",
            "Seamless technology ensures no visible lines under slim outfits",
            "Moisture-wicking, breathable fabric keeps you fresh and dry"
        ],
        "sizes": [],
        "colors": [
            {
                "name": "Fawn",
                "hex": "#E3C59E",
                "image": "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/1_4379e740-e89f-41bd-9f33-ded6d339023f_1080x1080_pad_ffffff.webp.jpg?v=1776406731",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/1_4379e740-e89f-41bd-9f33-ded6d339023f_1080x1080_pad_ffffff.webp.jpg?v=1776406731",
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Fawn_2e08f788-07e0-477d-9537-f56d003a589d.jpg?v=1777635938",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "Default",
                "hex": "#E8D5C0",
                "image": "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/1_4379e740-e89f-41bd-9f33-ded6d339023f_1080x1080_pad_ffffff.webp.jpg?v=1776406731",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/1_4379e740-e89f-41bd-9f33-ded6d339023f_1080x1080_pad_ffffff.webp.jpg?v=1776406731",
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Fawn_2e08f788-07e0-477d-9537-f56d003a589d.jpg?v=1777635938",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Non-Padded",
            "wire": "Wire-free",
            "coverage": "Full Coverage",
            "fabric": "Polyamide blend"
        }
    },
    {
        "id": "sb-918",
        "name": "Tweens Bonded Breathable Cotton Plus-Size Padded Full-Coverage Bra (SB-918)",
        "category": "bonded-bras",
        "description": "Product Description\n\nDesigned for real bodies and everyday ease, the Tweens Bonded Plus-Size Lightly Padded Cotton Bra delivers soft support, shape, and confidence in a full-coverage, lightly padded design for natural shaping without bulk.\n\nA bonded, elastic-free band and armholes prevent digging and marks, while broad cotton shoulder straps and side wings with an internal gripper keep everything comfortably in place all day.\n\nCrafted from premium breathable cotton with seamless construction, it stays smooth under tees, kurtis, workwear, and festive looks. The wire-free structure moves with you, and the hook-and-eye back closure lets you fine-tune the fit.\n\nKey Features\n\n\t*\n\nElastic-Free Band & Armhole – No Digging, No Marks\nEliminates elastic to prevent irritation, digging, and red marks.\n\t*\n\nWide Cotton Shoulder Straps – Gentle on Skin\nBroad straps distribute weight evenly, staying soft on shoulders without pressure.\n\t*\n\nBroad Side Wings with Internal Gripper – Secure Fit\nEnsures a snug hold and prevents side bulges for a streamlined silhouette.\n\t*\n\nSoft Cotton Fabric & Seamless Construction – Daily Comfort\nBreathable, lightweight cotton with seamless design for invisible wear.\n\t*\n\nLightly Padded Full Coverage Support\nLight padding and full coverage offer modesty and gentle lift without bulk.",
        "details": [
            "Engineered using premium raw materials for everyday usage",
            "Provides pressure-free hold and lifts naturally",
            "Seamless technology ensures no visible lines under slim outfits",
            "Moisture-wicking, breathable fabric keeps you fresh and dry"
        ],
        "sizes": [],
        "colors": [
            {
                "name": "Default",
                "hex": "#E8D5C0",
                "image": "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/1_1d20dc84-ceb1-47f2-816e-4cab6e2b3ae1_1080x1080_pad_ffffff.webp.jpg?v=1776407092",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/1_1d20dc84-ceb1-47f2-816e-4cab6e2b3ae1_1080x1080_pad_ffffff.webp.jpg?v=1776407092",
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Fawn.jpg?v=1777631177",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Lightly Padded",
            "wire": "Wire-free",
            "coverage": "Full Coverage",
            "fabric": "Polyamide blend"
        }
    },
    {
        "id": "tw-sb-995",
        "name": "Bonded Gym Bra with Crisscross Back | Non-Padded | Breathable Cotton (TW-SB-995)",
        "category": "bonded-bras",
        "description": "Product Description\n\nThe Tweens Cotton Non-Padded Bonded Gym Bra is designed for the training sessions where support matters as much as comfort. The crisscross back design provides enhanced back support during demanding workouts. Paired with a 3-level adjustable hook-and-eye closure at both the front and back, it ensures the bra stays firmly in place. Crafted from soft, breathable cotton fabric, the bra absorbs sweat efficiently. Its non-padded construction keeps the feel lightweight and airy, while a smartly placed hidden concealer on the cups prevents apex show.\n\nStaying true to Tweens' comfort promise, the elastic-free bottom band and armholes help eliminate rolling, digging, and red marks. The bonded, no-stitch seamless technology keeps the bra smooth against the skin. Designed to support you through every rep, sprint, and stretch, this is your reliable workout essential.\n\nCORE Features\n\n\t*\n\nCrisscross Back Support Delivers secure back support with a steady grip for mid-intensity workouts.\n\t*\n\nFront and Back, Dual Hook-eye Closure Dual closure provides a customised fit for the gym bra, ensuring reliable support without the need for constant adjusting.\n\t*\n\nFull Coverage - No spillage Designed to offer full coverage, it prevents top or side spillage and controls extra jiggle.\n\t*\n\nHidden Concealer for No-Apex Show The Non-Padded Cups are constructed with a hidden concealer to give a clean look and no-apex show.\n\t*\n\nBonded Seamless Technology The stitch-free, bonded finish sits smoothly on skin, promising rash-free comfort and goes invisible under outfits.\n\t*\n\nElastic Free Construction The elastic-free construction at armholes and the bottom band prevents skin irritation, digging, and unwanted marks. No Marks, No Digging, No Rashes.",
        "details": [
            "Engineered using premium raw materials for everyday usage",
            "Provides pressure-free hold and lifts naturally",
            "Seamless technology ensures no visible lines under slim outfits",
            "Moisture-wicking, breathable fabric keeps you fresh and dry"
        ],
        "sizes": [],
        "colors": [
            {
                "name": "Beige",
                "hex": "#F5F5DC",
                "image": "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Fawn_b4cce16e-8d6c-4101-9ed9-de58f4167379_1080x1080_pad_ffffff.webp.jpg?v=1777118849",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Fawn_b4cce16e-8d6c-4101-9ed9-de58f4167379_1080x1080_pad_ffffff.webp.jpg?v=1777118849",
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Fawn_6385f033-86ed-4b09-8e89-c7084b5921a0.jpg?v=1777637982",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "Black",
                "hex": "#1A1A1A",
                "image": "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Black_03397e58-b978-4b68-930e-b71ff7501a2f_1080x1080_pad_ffffff.webp.jpg?v=1777028646",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Black_03397e58-b978-4b68-930e-b71ff7501a2f_1080x1080_pad_ffffff.webp.jpg?v=1777028646",
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Black_b50b5b3b-8138-4226-a070-4d435c9cdd11.jpg?v=1777638117",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "Skin",
                "hex": "#E8C3A9",
                "image": "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Skin-3_1080x1080_pad_ffffff.webp.jpg?v=1777119080",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Skin-3_1080x1080_pad_ffffff.webp.jpg?v=1777119080",
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Skin_7dd6f0e2-4530-4790-a0cf-49e88bc8a5b1.jpg?v=1777638259",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "Default",
                "hex": "#E8D5C0",
                "image": "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/2_04052187-5efa-4025-b99d-55c5e3103d05_1080x1080_pad_ffffff.jpg.jpg?v=1777376851",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/2_04052187-5efa-4025-b99d-55c5e3103d05_1080x1080_pad_ffffff.jpg.jpg?v=1777376851",
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Wine_-95_jpg.jpg?v=1777638385",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Lightly Padded",
            "wire": "Wire-free",
            "coverage": "Full Coverage",
            "fabric": "Polyamide blend"
        }
    },
    {
        "id": "tw-sb-997",
        "name": "Bonded Gym Bra with Crisscross Back | Padded | Breathable Cotton (TW-SB-997)",
        "category": "bonded-bras",
        "description": "Product Description\n\nDesigned for women to move through cardio, strength training, and functional workouts, this Tweens Cotton Padded Bonded Gym Bra stays secure so you can stay focused on performance, not adjustments. The crisscross back design provides back support during workouts. To ensure maximum stability, the bra features a double-enclosure system with a 3-level adjustable hook-and-eye closure at the front and back. Crafted from soft, breathable cotton fabric, this bra absorbs sweat effectively to keep you cool and comfortable. The lightly padded cups provide gentle shaping and coverage. Its wire-free construction eliminates poking and restriction, allowing free movement.\n\nThe bonded, no-stitch seamless technology sits smoothly against the skin. Staying true to the Tweens' comfort promise, the elastic-free bottom band and armholes ensure no rolling, no digging, and no red marks.\n\ncore Features\n\n\t*\n\nCrisscross Back Support Delivers secure back support with a steady grip for mid-intensity workouts.\n\t*\n\nFront and Back Dual Hook-eye Closure Dual closure allows a customised fit to the gym bra for reliable support without the need for constant adjusting.\n\t*\n\nLightly Padded Cups Soft Light Padding for enhanced support and shape— no show-through, no extra bulk.\n\t*\n\nFull Coverage - No spillage Engineered to offer full coverage, it prevents top or side spillage and controls extra jiggle.\n\t*\n\nBonded Seamless Technology The stitch-free, bonded finish sits smoothly on skin, promising rash-free comfort and goes invisible under outfits.\n\t*\n\nElastic Free Construction The elastic-free construction at armholes and the bottom band prevents skin irritation, digging, and unwanted marks. No Marks, No Digging, No Rashes.",
        "details": [
            "Engineered using premium raw materials for everyday usage",
            "Provides pressure-free hold and lifts naturally",
            "Seamless technology ensures no visible lines under slim outfits",
            "Moisture-wicking, breathable fabric keeps you fresh and dry"
        ],
        "sizes": [],
        "colors": [
            {
                "name": "Fawn",
                "hex": "#E3C59E",
                "image": "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/02_adb9c8aa-55fa-492d-a421-05738f6b7d10_1080x1080_pad_ffffff.webp.jpg?v=1772254486",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/02_adb9c8aa-55fa-492d-a421-05738f6b7d10_1080x1080_pad_ffffff.webp.jpg?v=1772254486",
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Fawn_e616d6d2-7393-461e-8c6a-9f6bb1dd078c.jpg?v=1777637255",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "Skin",
                "hex": "#E8C3A9",
                "image": "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/02._e9427779-b1d2-48fb-b3ce-6059de440059_1080x1080_pad_ffffff.webp.jpg?v=1772254663",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/02._e9427779-b1d2-48fb-b3ce-6059de440059_1080x1080_pad_ffffff.webp.jpg?v=1772254663",
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Skin_4055fb0d-a8f9-40fa-986f-a1abc9dd5247.jpg?v=1777637429",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "Black",
                "hex": "#1A1A1A",
                "image": "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Black_c3651969-f2cb-4101-b38e-7811976456a1_1080x1080_pad_ffffff.webp.jpg?v=1777035588",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Black_c3651969-f2cb-4101-b38e-7811976456a1_1080x1080_pad_ffffff.webp.jpg?v=1777035588",
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Black_2e29388c-d2b4-4163-a1d7-af2994c96827.jpg?v=1777637652",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            },
            {
                "name": "Default",
                "hex": "#E8D5C0",
                "image": "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/4_e203d0d7-f8a3-4d80-8702-ff78d0b75827_1080x1080_pad_ffffff.jpg.jpg?v=1777378299",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/4_e203d0d7-f8a3-4d80-8702-ff78d0b75827_1080x1080_pad_ffffff.jpg.jpg?v=1777378299",
                    "https://cdn.shopify.com/s/files/1/0840/3045/6115/files/Wine_f1e2dabe-ecfb-415f-a572-bda32eb8efb7.jpg?v=1777637744",
                    "https://i.postimg.cc/J01ySmDR/6.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Lightly Padded",
            "wire": "Wire-free",
            "coverage": "Full Coverage",
            "fabric": "Polyamide blend"
        }
    }
,
    {
        "id": "sb-938",
        "name": "Tweens Cotton Padded Bonded Bra (SB-938)",
        "category": "bonded-bras",
        "description": "The Tweens Cotton Padded Bonded Bra is designed for women who want everyday comfort with smooth shaping and a clean, invisible finish under clothes. Made from breathable cotton fabric suited for Indian weather, it feels soft, lightweight, and gentle on the skin through long hours. The lightly padded cups provide natural shaping and reliable coverage without bulk. Its wire-free construction ensures pressure-free support and easy movement all day. Built with bonded seamless technology, it features an elastic-free bottom band and armholes to help reduce red marks, digging, and roll-up. The no-stitch finish sits flat under fitted outfits, while a supportive W-hold structure and broad seamless wings provide a secure, stable fit. No marks. No lines. Just comfort.",
        "details": [
            "Elastic-free bottom band and armholes offer whole-day comfort without any digging or red marks.",
            "Crafted with bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
            "Built from premium breathable cotton spandex fabric suited for Indian weather.",
            "Lightly padded cups provide natural shaping and reliable coverage without bulk.",
            "Wire-free construction ensures pressure-free support and easy movement all day.",
            "Supportive W-hold structure and broad seamless wings provide a secure, stable fit."
        ],
        "sizes": [
            "28B",
            "30A",
            "30B",
            "30C",
            "30D",
            "32A",
            "32B",
            "32C",
            "32D",
            "34A",
            "34B",
            "34C",
            "34D",
            "36A",
            "36B",
            "36C",
            "36D",
            "38A",
            "38B",
            "38C",
            "38D",
            "40A",
            "40B",
            "40C"
        ],
        "colors": [
            {
                "name": "BLACK",
                "hex": "#1A1A1A",
                "image": "https://i.postimg.cc/q7Vv90S3/1.jpg",
                "images": [
                    "https://i.postimg.cc/q7Vv90S3/1.jpg",
                    "https://i.postimg.cc/JhVz9mSC/2.jpg",
                    "https://i.postimg.cc/0NYyvF1t/3.jpg",
                    "https://i.postimg.cc/QMGdRsvG/4.jpg",
                    "https://i.postimg.cc/XvfYWm6H/5.jpg",
                    "https://i.postimg.cc/R0BvgdJw/1.jpg"
                ]
            },
            {
                "name": "CORAL",
                "hex": "#FF7F50",
                "image": "https://i.postimg.cc/q7Vv90S3/1.jpg",
                "images": [
                    "https://i.postimg.cc/q7Vv90S3/1.jpg",
                    "https://i.postimg.cc/JhVz9mSC/2.jpg",
                    "https://i.postimg.cc/0NYyvF1t/3.jpg",
                    "https://i.postimg.cc/QMGdRsvG/4.jpg",
                    "https://i.postimg.cc/XvfYWm6H/5.jpg",
                    "https://i.postimg.cc/R0BvgdJw/1.jpg",
                    "https://i.postimg.cc/VN8zKg0K/2.jpg",
                    "https://i.postimg.cc/Bv0JmpPh/3.jpg",
                    "https://i.postimg.cc/KY2m0f3p/4.jpg",
                    "https://i.postimg.cc/0Ns9VnKH/5.jpg",
                    "https://i.postimg.cc/J0vLZ5WS/1.jpg"
                ]
            },
            {
                "name": "FAWN",
                "hex": "#E3C59E",
                "image": "https://i.postimg.cc/VN8zKg0K/2.jpg",
                "images": [
                    "https://i.postimg.cc/VN8zKg0K/2.jpg",
                    "https://i.postimg.cc/Bv0JmpPh/3.jpg",
                    "https://i.postimg.cc/KY2m0f3p/4.jpg",
                    "https://i.postimg.cc/0Ns9VnKH/5.jpg",
                    "https://i.postimg.cc/J0vLZ5WS/1.jpg",
                    "https://i.postimg.cc/R0BvgdJw/1.jpg",
                    "https://i.postimg.cc/BZVsr41t/2.jpg",
                    "https://i.postimg.cc/fWrZGD0J/3.jpg",
                    "https://i.postimg.cc/WpHjBTJd/4.jpg",
                    "https://i.postimg.cc/SQvqBkz2/5.jpg",
                    "https://i.postimg.cc/kG6rJRtf/1.jpg"
                ]
            },
            {
                "name": "NAVY",
                "hex": "#1A2E4C",
                "image": "https://i.postimg.cc/BZVsr41t/2.jpg",
                "images": [
                    "https://i.postimg.cc/BZVsr41t/2.jpg",
                    "https://i.postimg.cc/fWrZGD0J/3.jpg",
                    "https://i.postimg.cc/WpHjBTJd/4.jpg",
                    "https://i.postimg.cc/SQvqBkz2/5.jpg",
                    "https://i.postimg.cc/kG6rJRtf/1.jpg",
                    "https://i.postimg.cc/R0BvgdJw/1.jpg",
                    "https://i.postimg.cc/3NPsdrgs/2.jpg",
                    "https://i.postimg.cc/fy6GJWc4/3.jpg",
                    "https://i.postimg.cc/brK7sYQ4/4.jpg",
                    "https://i.postimg.cc/tJLKYR3H/5.jpg",
                    "https://i.postimg.cc/9fJsyYdL/1.jpg"
                ]
            },
            {
                "name": "SKIN",
                "hex": "#E8C3A9",
                "image": "https://i.postimg.cc/3NPsdrgs/2.jpg",
                "images": [
                    "https://i.postimg.cc/3NPsdrgs/2.jpg",
                    "https://i.postimg.cc/fy6GJWc4/3.jpg",
                    "https://i.postimg.cc/brK7sYQ4/4.jpg",
                    "https://i.postimg.cc/tJLKYR3H/5.jpg",
                    "https://i.postimg.cc/9fJsyYdL/1.jpg",
                    "https://i.postimg.cc/R0BvgdJw/1.jpg",
                    "https://i.postimg.cc/qRqSw6wQ/2.jpg",
                    "https://i.postimg.cc/PxJ9yvyy/3.jpg",
                    "https://i.postimg.cc/DZ0H646d/4.jpg",
                    "https://i.postimg.cc/mDkJj1jw/5.jpg",
                    "https://i.postimg.cc/FHm9ZGS4/1.jpg"
                ]
            },
            {
                "name": "WHITE",
                "hex": "#FFFFFF",
                "image": "https://i.postimg.cc/qRqSw6wQ/2.jpg",
                "images": [
                    "https://i.postimg.cc/qRqSw6wQ/2.jpg",
                    "https://i.postimg.cc/PxJ9yvyy/3.jpg",
                    "https://i.postimg.cc/DZ0H646d/4.jpg",
                    "https://i.postimg.cc/mDkJj1jw/5.jpg",
                    "https://i.postimg.cc/FHm9ZGS4/1.jpg",
                    "https://i.postimg.cc/R0BvgdJw/1.jpg",
                    "https://i.postimg.cc/bwTqFb0v/2.jpg",
                    "https://i.postimg.cc/bwTqFb0r/3.jpg",
                    "https://i.postimg.cc/6p0B1RVT/4.jpg",
                    "https://i.postimg.cc/GmQbSYP4/5.jpg"
                ]
            },
            {
                "name": "WINE",
                "hex": "#722F37",
                "image": "https://i.postimg.cc/bwTqFb0v/2.jpg",
                "images": [
                    "https://i.postimg.cc/bwTqFb0v/2.jpg",
                    "https://i.postimg.cc/bwTqFb0r/3.jpg",
                    "https://i.postimg.cc/6p0B1RVT/4.jpg",
                    "https://i.postimg.cc/GmQbSYP4/5.jpg",
                    "https://i.postimg.cc/R0BvgdJw/1.jpg"
                ]
            }
        ],
        "features": {
            "padding": "Lightly Padded",
            "wire": "Wire-free",
            "coverage": "Full Coverage",
            "fabric": "Breathable Cotton Spandex"
        }
    }
];

// Dynamically generates a premium SVG