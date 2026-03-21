const questions = [
  {
    "id": 1,
    "title": "Practice 1",
    "raw": "1.0",
    "answer": "The history of the South Pacific is marked by diverse cultures and significant events. Indigenous populations developed complex societies with rich traditions and social structures. The region’s political and economic landscapes experienced profound changes following colonization by Europeans. Studying this history allows for a greater understanding of cultural interactions and the ongoing effects of historical events on contemporary South Pacific societies. Traditional navigation techniques using stars and ocean swells enabled remarkable voyaging achievements, while contemporary movements focus on cultural preservation, language revitalization, and addressing climate change impacts on island nations."
  },
  {
    "id": 2,
    "title": "Practice 2",
    "raw": "nan",
    "answer": "Tigers are solitary animals known for their territorial behavior; males use scent markings and vocalizations to define their territories. Each male tiger establishes control over a large territory spanning several square miles and patrols the area regularly to look for prey and maintain dominance. This behavior helps reduce conflicts over prey, but tigers are known to fiercely defend their territory from intruders when necessary. Often hunting at night, tigers use stealth and their excellent night vision to their advantage."
  },
  {
    "id": 3,
    "title": "Practice 3",
    "raw": "2.0",
    "answer": "The reaction of plants and animals to sunlight and seasonal changes, known as photoperiodism or seasonality, is vital to many biological and behavioral processes. Photoperiods, together with temperature changes, impact seasonal migration, mating rituals, and hibernation. In many birds, hormone levels increase in spring, which leads to an increase in singing frequency in males and mating behaviors. Photoperiodism allows plants and animals to respond to changes in the environment associated with changing seasons and varying day length."
  },
  {
    "id": 4,
    "title": "Practice 4",
    "raw": "nan",
    "answer": "Tectonic plates are large pieces of Earth's outer shell that move slowly over the planet's surface, and their study is fundamental in understanding Earth's geological activity. These plates fit together much like a jigsaw puzzle and constantly shift, causing earthquakes, the formation of mountains, and volcanic eruptions. Scientists analyze these movements to better understand natural disasters and how Earth's surface changes over time. Advances in this field have significantly improved our ability to monitor and prepare for natural disasters as well as to mitigate their impacts."
  },
  {
    "id": 5,
    "title": "Practice 5",
    "raw": "3.0",
    "answer": "Pottery is an ancient craft that involves shaping and firing clay in special wood-fired ovens (kilns) to create functional and decorative objects. Early pots were shaped by hand and heated in simple kilns, producing ceramics that lasted longer. As societies developed, techniques became more refined, with different cultures creating distinct styles. Over time, pottery evolved into both a practical craft and a significant form of artistic and cultural expression. Pottery has been practiced by cultures worldwide, reflecting their unique artistic traditions and functional needs."
  },
  {
    "id": 6,
    "title": "Practice 6",
    "raw": "nan",
    "answer": "Glaciers are massive, slow-moving bodies of ice that form in areas where snow accumulates over time and compresses into ice. They can change landscapes through processes like erosion and deposition. As glaciers move, they carve out valleys and fjords, leaving behind distinct geological features. Scientists study glaciers to understand past climate conditions and predict future changes. Glaciers are of particular concern today because their melting contributes to rising sea levels, impacting coastal communities worldwide."
  },
  {
    "id": 7,
    "title": "Practice 7",
    "raw": "4.0",
    "answer": "The Spix's Macaw, native to Brazil and famously known as the inspiration for the animated movie Rio, is critically endangered, with fewer than a hundred individuals remaining. The population of this vibrant blue bird declined because of habitat loss and illegal trapping for sale abroad, where private collectors and pet stores spent large sums of money on the birds. Conservationists have initiated captive breeding programs and habitat restoration efforts to reintroduce the Spix's Macaw into the wild, where it was officially declared extinct in 2019."
  },
  {
    "id": 8,
    "title": "Practice 8",
    "raw": "nan",
    "answer": "Cosmology is the study of how the universe began, changed over time, and might evolve in the future. Scientists examine stars, planets, and galaxies using observations and models to describe cosmic events. One widely accepted idea is the big bang, which suggests the universe started from a single point and has been expanding ever since. Ongoing research helps improve our understanding of space, time, and the forces shaping the cosmos, revealing new discoveries about the vast universe."
  },
  {
    "id": 9,
    "title": "Practice 9",
    "raw": "5.0",
    "answer": "Mushrooms are made up of two main parts: the mycelium and the fruiting body. The mycelium is long-lived, while the fruiting body appears only when conditions are ideal for reproduction (like after rain). Usually underground, the mycelium consists of a network of thread-like structures that absorb nutrients from the soil. The fruiting body is above ground and responsible for producing and spreading spores. These spores are released into the air to help the mushroom reproduce."
  },
  {
    "id": 10,
    "title": "Practice 10",
    "raw": "6.0",
    "answer": "Pigments are substances that provide color to materials, and they can be derived from various natural sources, such as minerals and plants. It was once common for artists to create their own paints by mixing several pigments together. This process was time-consuming and required detailed knowledge of pigments—their chemical properties, how they interact with different media, and their durability over time. But it also allowed painters to give their artworks a truly unique color palette."
  },
  {
    "id": 11,
    "title": "Practice 11",
    "raw": "7.0",
    "answer": "The Erie Canal, completed in 1825, is a historic waterway in the United States that linked the Atlantic Ocean to the Great Lakes. Its construction was a remarkable engineering feat and pioneered many innovative techniques. The canal significantly reduced transportation costs and time from New York City to the interior of the nation, propelling the city into a major commercial hub. The success of the Erie Canal inspired the building of other canals and infrastructure projects across the United States."
  },
  {
    "id": 12,
    "title": "Practice 12",
    "raw": "8.0",
    "answer": "The introduction of sanitation practices in urban areas during the nineteenth century significantly improved public health. Innovations such as sewage systems and clean water supplies developed from the growing awareness of the connection between poor hygiene and illness, and reduced the spread of infectious diseases like cholera and typhoid. Public health campaigns, supported by local governments and medical professionals, educated communities on the importance of hygiene. These efforts were instrumental in decreasing mortality rates and enhancing quality of life."
  },
  {
    "id": 13,
    "title": "Practice 13",
    "raw": "9.0",
    "answer": "Supply and demand are fundamental concepts in economics because they determine the price and availability of goods or services. When there is more demand for a product, suppliers may make it more expensive to increase profits. Conversely, an excess supply can lead to price reductions. Market equilibrium occurs when supply matches demand, resulting in stable prices. The real world, however, is rarely as simple as this. Various factors influence these dynamics, including consumer preferences, production costs, and external events."
  },
  {
    "id": 14,
    "title": "Practice 14",
    "raw": "nan",
    "answer": "Fossils provide invaluable evidence of evolutionary history, documenting species that lived millions of years ago. Paleontologists examine these remains to understand how organisms have changed over time. Natural selection explains how advantageous traits increase in frequency in a population. Species adapt to their environments, which leads to incredible diversity observed in the biological world today through the mechanism of natural selection. The ongoing study of evolution continues to reveal how life on Earth has developed and diversified."
  },
  {
    "id": 15,
    "title": "Practice 15",
    "raw": "10.0",
    "answer": "The night sky has fascinated humans for centuries, leading to numerous discoveries about our universe. Stars, planets, and galaxies are observed using telescopes, which magnify distant objects. Many astronomers study star formations to learn about the origins of the universe. By analyzing the light emitted from stars, scientists can determine their composition and age. This exploration helps us understand the complex nature of cosmic development and our place within it."
  },
  {
    "id": 16,
    "title": "Practice 16",
    "raw": "11.0",
    "answer": "Aquariums provide an opportunity to observe a variety of fish and other aquatic organisms in a controlled environment. These facilities carefully replicate natural habitats, allowing visitors to learn about marine life without venturing into the ocean. Exhibits often include coral reefs, kelp forests, and freshwater streams, showcasing the diversity of aquatic ecosystems. Educational programs and guided tours enhance the experience, offering insights into the behavior, diet, and conservation of these organisms. Maintaining an aquarium requires expertise in water chemistry, filtration systems, and species compatibility."
  },
  {
    "id": 17,
    "title": "Practice 17",
    "raw": "12.0",
    "answer": "Logic and reasoning are essential components of academic methodology. These skills involve evaluating arguments, identifying fallacies, and constructing coherent conclusions based on evidence. Mastering logical principles enhances critical thinking and problem-solving abilities. In various disciplines, from science to philosophy, these principles are used to analyze complex issues and develop informed perspectives, contributing to intellectual growth and effective decision-making. Formal logic systems include propositional and predicate logic, while informal logic addresses everyday reasoning, helping individuals recognize cognitive biases and construct more persuasive and sound arguments."
  },
  {
    "id": 18,
    "title": "Practice 18",
    "raw": "nan",
    "answer": "Museums play a crucial role in preserving and showcasing art, history, and culture. They provide a space where people can engage with multiple forms of artistic expression and historical artifacts. Many museums also offer educational programs and workshops, fostering a deeper understanding of the subjects they display. In addition, digital innovations have enabled museums to reach global audiences through virtual tours and online collections. The patronage of visual arts by individuals and organizations helps support artists and ensures the continued growth and diversity of the cultural landscape."
  },
  {
    "id": 19,
    "title": "Practice 19",
    "raw": "13.0",
    "answer": "Global temperatures and weather patterns are experiencing notable shifts, which scientific research strongly associates with human-related factors. Activities such as the use of fossil fuels, changes in land use, and industrial production contribute to the accumulation of greenhouse gases in the atmosphere. These gases retain heat, gradually increasing the Earth's average temperature. If emissions continue at current levels, potential outcomes may include more frequent extreme weather events, rising sea levels, and disruptions to ecosystems. Experts emphasize that timely and coordinated efforts are essential to reduce risks and promote long-term environmental stability."
  },
  {
    "id": 20,
    "title": "Practice 20",
    "raw": "14.0",
    "answer": "The Odyssey is an ancient Greek epic poem that follows the hero, Odysseus, on his ten-year journey home after the Trojan War. It is widely considered one of the greatest works in the history of European literature. The Odyssey established many narrative structures and archetypes—like the hero's journey—that continue to shape storytelling today. It also delves into timeless human experiences. Odysseus's longing to return home, for example, resonates with the universal desire for belonging and stability. He must adapt, disguise, and rediscover himself, reflecting the fluid nature of identity."
  },
  {
    "id": 21,
    "title": "Practice 21",
    "raw": "nan",
    "answer": "What are some foundational skills for academic success? Critical thinking allows students to approach problems systematically, analyze information, and make connections between ideas. Also important are soft skills like time management and social skills. Time management is helpful for balancing studies, extracurricular activities, and personal life in an efficient manner. Social skills are good predictors of academic success because those who communicate effectively can form positive relationships with their peers and professors."
  },
  {
    "id": 22,
    "title": "Practice 22",
    "raw": "15.0",
    "answer": "James Cook was a British naval officer, explorer, and cartographer born in 1728. He is best known for his three voyages across the Pacific Ocean, during which he meticulously mapped coastlines and collected data on astronomy, natural history, and oceanography. Cook is the first European to circumnavigate New Zealand and make contact with the Hawaiian Islands. He is also notable for implementing health measures aboard his ships, such as dietary changes to prevent the disease scurvy."
  },
  {
    "id": 23,
    "title": "Practice 23",
    "raw": "16.0",
    "answer": "Mass extinctions have periodically reshaped the diversity of life on Earth, representing significant biological and ecological shifts. The most famous event, the Cretaceous-Paleogene extinction, occurred approximately 66 million years ago and led to the demise of the dinosaurs. Large-scale losses of species are often caused by catastrophic events such as volcanic eruptions, asteroid impacts, and climate change. The resulting damage to biodiversity disrupts ecosystems and alters evolutionary trajectories. Studying past extinctions provides insights into the resilience and adaptability of life, helping scientists predict and mitigate future biodiversity loss."
  },
  {
    "id": 24,
    "title": "Practice 24",
    "raw": "nan",
    "answer": "Child development milestones are key indicators of a child's growth. They encompass various aspects of development, including language acquisition, motor skills, and social interactions. One example is taking a first step, which typically occurs around the age of twelve months. These milestones are useful in helping parents and caretakers monitor a child's progress. It is important to remember, however, that these milestones only provide a general guide, and each child develops at their own pace."
  },
  {
    "id": 25,
    "title": "Practice 25",
    "raw": "17.0",
    "answer": "Plants have tiny holes called stomata on their leaves and stems that allow them to take in carbon dioxide from the air and release oxygen into the air. However,  stomata can also let water vapor escape, which causes problems in dry environments. To manage this, during hot periods when water loss is especially severe, some plants close their stomata temporarily. Another special adaptation is thick, waxy coatings on plant leaves that help conserve water."
  },
  {
    "id": 26,
    "title": "Practice 26",
    "raw": "nan",
    "answer": "Rooted in both biology and chemistry, modern biochemistry has grown into a foundational science that explores the molecular basis of life. It emerged from early investigations into natural processes like fermentation and digestion and now encompasses the study of biomolecules such as proteins, carbohydrates, and nucleic acids. Biochemistry plays a vital role in diverse fields including agriculture, environmental science, and pharmacology, contributing to innovations in areas like crop improvement, pollution control, and drug design, for example. Its broad applications continue to shape our understanding of living systems and support solutions to global challenges."
  },
  {
    "id": 27,
    "title": "Practice 27",
    "raw": "18.0",
    "answer": "Crop rotation is a farming technique that involves growing a series of different types of crops in the same area across a sequence of seasons. Different crops use different nutrients from the soil, so rotating them prevents the soil from becoming depleted. This method helps to reduce pests and diseases; it also decreases the need for chemical fertilizers, promoting sustainable agriculture. Farmers use this practice to improve crop yields and maintain healthy soil."
  },
  {
    "id": 28,
    "title": "Practice 28",
    "raw": "nan",
    "answer": "Conservation ecology focuses on preserving biodiversity and protecting ecosystems from degradation. This discipline involves studying the interactions between species and their environments to develop strategies for maintaining ecological balance. Efforts include habitat restoration, sustainable resource management, and the establishment of protected areas. Conservation ecologists work to mitigate the impacts of human activities such as deforestation, pollution, and climate change. Public awareness campaigns and policy advocacy are crucial components of conservation initiatives. By safeguarding natural habitats, conservation ecology aims to ensure the survival of diverse species and the health of the planet."
  },
  {
    "id": 29,
    "title": "Practice 29",
    "raw": "19.0",
    "answer": "The Renaissance was a period of cultural rebirth in Europe, spanning the fourteenth to seventeenth centuries. A vibrant period of cultural, artistic, and intellectual revival, the Renaissance marked a renewed interest in classical literature, art, and science. The Renaissance had a profound historical impact, serving as a bridge between the Middle Ages and the modern era. It sparked a cultural awakening that emphasized humanism, individual achievement, and secular learning, which reshaped European thought and institutions."
  },
  {
    "id": 30,
    "title": "Practice 30",
    "raw": "20.0",
    "answer": "Ocean currents are critical components of Earth’s climate system, influencing weather patterns and marine ecosystems. Driven by wind, temperature changes, and differences in salinity, ocean currents distribute heat across the globe. The Gulf Stream, for instance, warms the North Atlantic Current, affecting climate in Europe. Deep ocean currents, known as thermohaline circulation, play a role in regulating global temperatures and carbon dioxide levels. Research in oceanography continues to reveal the complexities of these dynamic systems."
  },
  {
    "id": 31,
    "title": "Practice 31",
    "raw": "21.0",
    "answer": "Art colonies have historically served as vibrant communities where artists gather to share ideas, collaborate, and create. The community environment allows artists to receive feedback from peers and experiment with new techniques, enriching their artistic practice. Such enclaves often emerge in picturesque locations that inspire creativity, such as coastal towns or rural landscapes. Notable art colonies, like those in Montmartre or Taos, have produced influential works and fostered movements such as Impressionism and Modernism. Contemporary art colonies continue this tradition, adapting to modern mediums and technologies while maintaining a spirit of collaboration and innovation."
  },
  {
    "id": 32,
    "title": "Practice 32",
    "raw": "nan",
    "answer": "Grasshoppers are insects commonly found in dry places with grass and plants. Grasshoppers have several ways they protect themselves against danger. They have powerful back legs, which allow them to jump away from enemies, such as rodents and snakes. Some grasshoppers can jump twenty times the length of their bodies. By the time they are adults, grasshoppers can also fly. Adult grasshoppers fly very quickly and this helps them avoid danger."
  },
  {
    "id": 33,
    "title": "Practice 33",
    "raw": "22.0",
    "answer": "Oceanography is the study of the physical, chemical, and biological aspects of the ocean. This field encompasses the exploration of ocean currents, marine ecosystems, and geological seabed structures. Oceanographers use satellites and other advanced technology to monitor and analyze ocean conditions. By tracking sea surface temperatures, currents, salinity, and other features, researchers contribute to our understanding of climate change. Their work is vital for sustaining ocean health and preserving marine biodiversity."
  },
  {
    "id": 34,
    "title": "Practice 34",
    "raw": "nan",
    "answer": "The unusual properties of spider silk—a remarkable combination of strength and elasticity—have long attracted the attention of many. Spider silk has a breaking point far greater than steel and may stretch its full length before breaking: a 0.01 centimeter thread can support eighty grams. Spider silk is also very durable, a feature well illustrated by the persistence of cobwebs. Throughout history, humans have adapted spider silk for many purposes. For a long period, thick webs were used in Europe as bandages."
  },
  {
    "id": 35,
    "title": "Practice 35",
    "raw": "23.0",
    "answer": "nan"
  },
  {
    "id": 36,
    "title": "Practice 36",
    "raw": "nan",
    "answer": "nan"
  },
  {
    "id": 37,
    "title": "Practice 37",
    "raw": "24.0",
    "answer": "nan"
  },
  {
    "id": 38,
    "title": "Practice 38",
    "raw": "nan",
    "answer": "nan"
  }
]