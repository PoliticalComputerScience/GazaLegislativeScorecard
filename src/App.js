import React, { useState } from 'react';
import './page.css';

const senatorImages = {
  'Patty Murray': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Patty_Murray%2C_official_portrait%2C_113th_Congress.jpg/440px-Patty_Murray%2C_official_portrait%2C_113th_Congress.jpg',
  'Maria Cantwell': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Maria_Cantwell_%28cropped%29.jpg/190px-Maria_Cantwell_%28cropped%29.jpg',
  'Laphonza Butler': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Laphonza_Butler_Senate_photo%2C_2023_%28close_crop%29.jpg/190px-Laphonza_Butler_Senate_photo%2C_2023_%28close_crop%29.jpg',
  'Alex Padilla': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Alex_Padilla_117th_Congress_portrait_%283%29_%28crop%29.jpg/189px-Alex_Padilla_117th_Congress_portrait_%283%29_%28crop%29.jpg',
  'Ron Wyden': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ron_Wyden_117th_Congress_%28cropped%29.jpeg/190px-Ron_Wyden_117th_Congress_%28cropped%29.jpeg',
  'Jeff Merkley': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Jeff_Merkley%2C_115th_official_photo_%28cropped%29.jpg/190px-Jeff_Merkley%2C_115th_official_photo_%28cropped%29.jpg',
  'Mitch McConnell': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Mitch_McConnell_portrait_2016.jpg/190px-Mitch_McConnell_portrait_2016.jpg',
  'Rand Paul': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Rand_Paul_Official_Portrait_%28cropped%29.jpg/188px-Rand_Paul_Official_Portrait_%28cropped%29.jpg',
  'Chuck Schumer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Chuck_Schumer_official_photo_%28cropped%29.jpg/190px-Chuck_Schumer_official_photo_%28cropped%29.jpg',
  'Kirsten Gillibrand': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Kirsten_Gillibrand%2C_official_photo%2C_116th_Congress_%284x5_crop%29.jpg/190px-Kirsten_Gillibrand%2C_official_photo%2C_116th_Congress_%284x5_crop%29.jpg',
  'Bernie Sanders': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Bernie_Sanders_2023_%28cropped%29.jpg/190px-Bernie_Sanders_2023_%28cropped%29.jpg',
  'Peter Welch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Peter_Welch_official_Senate_photo_%28cropped%29.jpg/190px-Peter_Welch_official_Senate_photo_%28cropped%29.jpg',
  'Elizabeth Warren': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Elizabeth_Warren--2016_Official_Portrait--%28cropped%29_%28cropped%29.jpg/190px-Elizabeth_Warren--2016_Official_Portrait--%28cropped%29_%28cropped%29.jpg',
  'Ed Markey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Edward_Markey%2C_official_portrait%2C_114th_Congress_%28cropped%29.jpg/190px-Edward_Markey%2C_official_portrait%2C_114th_Congress_%28cropped%29.jpg',
  'Angus King': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Angus_King%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/190px-Angus_King%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
  'Susan Collins': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Senator_Susan_Collins_2014_official_portrait_%28cropped%29.jpg/190px-Senator_Susan_Collins_2014_official_portrait_%28cropped%29.jpg',
  'Dick Durbin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dick_Durbin_2022_official_portrait_%28cropped%29_2.jpg/190px-Dick_Durbin_2022_official_portrait_%28cropped%29_2.jpg',
  'Tammy Duckworth': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Tammy_Duckworth_115th_official_portrait_%28cropped%29.jpg/190px-Tammy_Duckworth_115th_official_portrait_%28cropped%29.jpg',
  'Bob Casey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Bob_Casey_Jr._official_photo_%28cropped%29.jpg/190px-Bob_Casey_Jr._official_photo_%28cropped%29.jpg',
  'John Fetterman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/John_Fetterman_official_portrait_%283x4%29.jpg/190px-John_Fetterman_official_portrait_%283x4%29.jpg',
  'Ben Cardin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ben_Cardin_official_Senate_portrait_%28cropped%29.jpg/190px-Ben_Cardin_official_Senate_portrait_%28cropped%29.jpg',
  'Chris Van Hollen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Chris_Van_Hollen_official_portrait_115th_Congress_%28cropped%29.jpg/190px-Chris_Van_Hollen_official_portrait_115th_Congress_%28cropped%29.jpg',
  'Amy Klobuchar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/190px-Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
  'Tina Smith': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Tina_Smith%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg/190px-Tina_Smith%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg',
  'Sherrod Brown': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sherrod_Brown_117th_Congress_%282%29_%284x5_crop%29.jpg/190px-Sherrod_Brown_117th_Congress_%282%29_%284x5_crop%29.jpg',
  'J.D. Vance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Senator_Vance_official_portrait._118th_Congress_%28cropped%29.jpg/190px-Senator_Vance_official_portrait._118th_Congress_%28cropped%29.jpg',
  'Debbie Stabenow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Debbie_Stabenow%2C_official_photo%2C_116th_Congress_%284x5_crop%29.jpg/190px-Debbie_Stabenow%2C_official_photo%2C_116th_Congress_%284x5_crop%29.jpg',
  'Gary Peters': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Gary_Peters_official_photo_115th_congress_%28cropped%29.jpg/190px-Gary_Peters_official_photo_115th_congress_%28cropped%29.jpg',
  'Tim Kaine': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tim_Kaine_116th_official_portrait_%28cropped%29.jpg/190px-Tim_Kaine_116th_official_portrait_%28cropped%29.jpg',
  'Mark Warner': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mark_Warner_2024.jpg/190px-Mark_Warner_2024.jpg',
  'Raphael Warnock': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Raphael_Warnock_official_photo_%284x5_crop%29.jpg/190px-Raphael_Warnock_official_photo_%284x5_crop%29.jpg',
  'Jon Ossoff': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jon_Ossoff_Senate_Portrait_2021_%28cropped%29.jpg/190px-Jon_Ossoff_Senate_Portrait_2021_%28cropped%29.jpg',
  'Rick Scott': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Official_Portrait_of_Senator_Rick_Scott_%28cropped%29.jpg/190px-Official_Portrait_of_Senator_Rick_Scott_%28cropped%29.jpg',
  'Martin Heinrich': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Heinrich_Official_Headshot_2019_%28cropped%29.jpg/190px-Heinrich_Official_Headshot_2019_%28cropped%29.jpg',
  'Ben Ray Lujan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ben_Ray_Lujan%2C_117th_Congress_portrait_2_%28cropped%29.jpg/190px-Ben_Ray_Lujan%2C_117th_Congress_portrait_2_%28cropped%29.jpg',
  'John Hickenlooper': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/John_Hickenlooper%2C_official_portrait%2C_117th_Congress_%284x5_crop%29.jpeg/190px-John_Hickenlooper%2C_official_portrait%2C_117th_Congress_%284x5_crop%29.jpeg',
  'Michael Bennet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Senator_Mike_Bennett_%284x5_crop%29.jpg/190px-Senator_Mike_Bennett_%284x5_crop%29.jpg',
  'Catherine Cortez Masto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Catherine_Cortez_Masto_portrait_red_%28_4x5_crop%29.jpg/190px-Catherine_Cortez_Masto_portrait_red_%28_4x5_crop%29.jpg',
  'Jacky Rosen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Senator_Jacky_Rosen_Official_Portrait_%282022%29_%28cropped%29.jpg/189px-Senator_Jacky_Rosen_Official_Portrait_%282022%29_%28cropped%29.jpg',
  'Mark Kelly': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mark_Kelly%2C_Official_Portrait_117th_%28cropped%29_2.jpg/190px-Mark_Kelly%2C_Official_Portrait_117th_%28cropped%29_2.jpg',
  'Kyrsten Sinema': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Sinema_Dec_2023.jpg/190px-Sinema_Dec_2023.jpg',
  'Cory Booker': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg/190px-Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg',
  'Bob Menendez': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Senator_Bob_Menendez_%282022%29.jpg/440px-Senator_Bob_Menendez_%282022%29.jpg',
  'Jack Reed': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Senator_Jack_Reed_official_photo_%28cropped%29.jpg/190px-Senator_Jack_Reed_official_photo_%28cropped%29.jpg',
  'Sheldon Whitehouse': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Sheldon_Whitehouse%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg/190px-Sheldon_Whitehouse%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg',
  'Tom Carper': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tom_Carper%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg/190px-Tom_Carper%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg',
  'Chris Coons': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chris_Coons%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg/190px-Chris_Coons%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg',
  'Chris Murphy': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chris_Murphy%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/190px-Chris_Murphy%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
  'Richard Blumenthal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Richard_Blumenthal_Official_Portrait_%284x5_crop%29.jpg/190px-Richard_Blumenthal_Official_Portrait_%284x5_crop%29.jpg',
  'Jeanne Shaheen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Shaheen_Senate_Portrait_%28cropped%29_%28cropped%29.jpg/190px-Shaheen_Senate_Portrait_%28cropped%29_%28cropped%29.jpg',
  'Maggie Hassan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Maggie_Hassan%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg/190px-Maggie_Hassan%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg',
  'Joe Manchin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Senator_Manchin_%28cropped%29.jpg/190px-Senator_Manchin_%28cropped%29.jpg',
  'Shelley Capito': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Shelley_Moore_Capito_official_Senate_photo_%28cropped_2%29.jpg/190px-Shelley_Moore_Capito_official_Senate_photo_%28cropped_2%29.jpg',
  'Ted Cruz': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ted_Cruz_official_116th_portrait_%28cropped%29.jpg/190px-Ted_Cruz_official_116th_portrait_%28cropped%29.jpg',
  'John Cornyn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/John_Cornyn_%28cropped%29.jpg/193px-John_Cornyn_%28cropped%29.jpg',
  'Jim Risch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jim_Risch_official_portrait_%28cropped%29.jpg/190px-Jim_Risch_official_portrait_%28cropped%29.jpg',
  'Mike Crapo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mike_Crapo_2019_%28cropped%29.jpg/190px-Mike_Crapo_2019_%28cropped%29.jpg',
  'John Thune': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/John_Thune_117th_Congress_portrait_%28cropped%29.jpg/190px-John_Thune_117th_Congress_portrait_%28cropped%29.jpg',
  'Mike Rounds': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mike_Rounds_official_Senate_portrait_%28cropped%29.jpg/190px-Mike_Rounds_official_Senate_portrait_%28cropped%29.jpg',
  'James Lankford': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/James_Lankford_official_portrait%2C_118th_Congress_%28cropped%29.jpg/191px-James_Lankford_official_portrait%2C_118th_Congress_%28cropped%29.jpg',
  'Roger Wicker': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Roger_F._Wicker_crop.jpg/190px-Roger_F._Wicker_crop.jpg',
  'Cindy Hyde-Smith': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Official_headshot_of_US_Senator_Cindy_Hyde-Smith_%28cropped%29.jpg/190px-Official_headshot_of_US_Senator_Cindy_Hyde-Smith_%28cropped%29.jpg',
  'John Kennedy': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/John_Neely_Kennedy%2C_official_portrait%2C_115th_Congress.jpg/189px-John_Neely_Kennedy%2C_official_portrait%2C_115th_Congress.jpg',
  'Bill Cassidy': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bill_Cassidy_official_Senate_photo_%28cropped%29.jpg/190px-Bill_Cassidy_official_Senate_photo_%28cropped%29.jpg',
  'Josh Hawley': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Josh_Hawley%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg/190px-Josh_Hawley%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg',
  'Jerry Moran': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Jerry_Moran%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg/190px-Jerry_Moran%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg',
  'Roger Marshall': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Roger_Marshall_117th_Congress_portrait_%28cropped%29.jpg/190px-Roger_Marshall_117th_Congress_portrait_%28cropped%29.jpg',
  'Kevin Cramer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kevin_Cramer%2C_official_portrait%2C_116th_congress_2_%284x5_crop%29.jpg/190px-Kevin_Cramer%2C_official_portrait%2C_116th_congress_2_%284x5_crop%29.jpg',
  'John Hoeven': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Hoeven_Official_Portrait_2014_%28cropped%29.JPG/190px-Hoeven_Official_Portrait_2014_%28cropped%29.JPG',
  'Deb Fischer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sen._Deb_Fischer_%28R-NE%29%2C_official_portrait%2C_118th_United_States_Congress_%28cropped%29.jpg/189px-Sen._Deb_Fischer_%28R-NE%29%2C_official_portrait%2C_118th_United_States_Congress_%28cropped%29.jpg',
  'Pete Ricketts': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sen._Pete_Ricketts_official_portrait%2C_118th_Congress_%28cropped%29.jpg/190px-Sen._Pete_Ricketts_official_portrait%2C_118th_Congress_%28cropped%29.jpg',
  'Lindsey Graham': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/U.S._Senator_Lindsey_Graham%2C_Official_Photo%2C_113th_Congress_%28cropped%29.jpg/190px-U.S._Senator_Lindsey_Graham%2C_Official_Photo%2C_113th_Congress_%28cropped%29.jpg',
  'Tim Scott': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tim_Scott%2C_official_portrait%2C_113th_Congress_%28cropped_2%29.jpg/190px-Tim_Scott%2C_official_portrait%2C_113th_Congress_%28cropped_2%29.jpg',
  'Tommy Tuberville': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tommy_Tuberville%2C_official_portrait%2C_118th_Congress_%28slight_crop%29.jpg/190px-Tommy_Tuberville%2C_official_portrait%2C_118th_Congress_%28slight_crop%29.jpg',
  'Katie Britt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Katie_Britt_%28cropped%29.jpg/190px-Katie_Britt_%28cropped%29.jpg',
  'Marco Rubio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Senator_Rubio_official_portrait_%28cropped%29.jpg/190px-Senator_Rubio_official_portrait_%28cropped%29.jpg',
  'Mike Lee': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Mike_Lee%2C_official_portrait_%284x5_crop%29.jpg/190px-Mike_Lee%2C_official_portrait_%284x5_crop%29.jpg',
  'Mitt Romney': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Mitt_Romney_official_US_Senate_portrait_%28cropped%29.jpg/190px-Mitt_Romney_official_US_Senate_portrait_%28cropped%29.jpg',
  'John Barrasso': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/John_Barrasso_official_portrait_112th_Congress_%28cropped%29.jpg/190px-John_Barrasso_official_portrait_112th_Congress_%28cropped%29.jpg',
  'Cynthia Lummis': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Cynthia_Lummis_U.S._Senator_%28cropped%29.jpg/190px-Cynthia_Lummis_U.S._Senator_%28cropped%29.jpg',
  'Dan Sullivan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Senator_Dan_Sullivan_official_%28cropped%29.jpg/190px-Senator_Dan_Sullivan_official_%28cropped%29.jpg',
  'Lisa Murkowski': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lisa_Murkowski_official_photo_%28cropped%29.jpg/190px-Lisa_Murkowski_official_photo_%28cropped%29.jpg',
  'Tom Cotton': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tom_Cotton_official_Senate_photo_%28cropped%29.jpg/190px-Tom_Cotton_official_Senate_photo_%28cropped%29.jpg',
  'John Boozman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Senator_John_Boozman_Official_Portrait_%28115th_Congress%29_%28cropped%29.jpg/190px-Senator_John_Boozman_Official_Portrait_%28115th_Congress%29_%28cropped%29.jpg',
  'Brian Schatz': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Brian_Schatz%2C_official_portrait%2C_113th_Congress_2_%28cropped%29.jpg/190px-Brian_Schatz%2C_official_portrait%2C_113th_Congress_2_%28cropped%29.jpg',
  'Mazie Hirono' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Mazie_Hirono%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/190px-Mazie_Hirono%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
  'Todd Young': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Sen._Todd_Young_official_photo_%28cropped%29.jpg/190px-Sen._Todd_Young_official_photo_%28cropped%29.jpg',
  'Mike Braun' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Mike_Braun%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg/190px-Mike_Braun%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg',
  'Chuck Grassley': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Chuck_Grassley_official_photo_2017_%28cropped%29.jpg/190px-Chuck_Grassley_official_photo_2017_%28cropped%29.jpg',
  'Joni Ernst': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Joni_Ernst%2C_official_portrait%2C_116th_Congress_3_%28cropped%29.jpg/190px-Joni_Ernst%2C_official_portrait%2C_116th_Congress_3_%28cropped%29.jpg',
  'Marsha Blackburn' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Marsha_Blackburn%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg/189px-Marsha_Blackburn%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg',
  'Markwayne Mullen' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Markwayne_Mullin_official_Senate_photo_%28cropped%29.jpg/190px-Markwayne_Mullin_official_Senate_photo_%28cropped%29.jpg',
  'Steve Daines': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Steve_Daines%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg/190px-Steve_Daines%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg',
'George Helmy': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Senator_George_Helmy_118th_%28cropped%29.jpg/190px-Senator_George_Helmy_118th_%28cropped%29.jpg',
'Tammy Baldwin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Tammy_Baldwin%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/190px-Tammy_Baldwin%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
'Eric Schmitt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Sen._Eric_Schmitt%2C_official_portrait%2C_118th_Congress_%28cropped_2%29.jpg/190px-Sen._Eric_Schmitt%2C_official_portrait%2C_118th_Congress_%28cropped_2%29.jpg',
'Thom Tillis': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Sen._Thom_Tillis_official_photo_%28cropped%29.jpg/190px-Sen._Thom_Tillis_official_photo_%28cropped%29.jpg',
'Ron Johnson': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ron_Johnson_portrait_117th_Congress_%28cropped%29.jpg/190px-Ron_Johnson_portrait_117th_Congress_%28cropped%29.jpg',
'Jon Tester': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/JonTester_%28cropped%29.jpg/190px-JonTester_%28cropped%29.jpg',
'Bill Hagerty': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sen._Bill_Hagerty_official_Senate_portrait%2C_117th_Congress_%28cropped%29.jpg/190px-Sen._Bill_Hagerty_official_Senate_portrait%2C_117th_Congress_%28cropped%29.jpg'
};

// Add more senator-to-image mappings as needed

// Hardcoded list of senators for the 118th Congress (2023-2025)
const initialSenators = [{'name': 'Tommy Tuberville', 'state': 'R-AL', 'weights': [0.6836734693877551, 0.07653061224489796, 0.642857142857143, 0.2602040816326531, 0.2908163265306123], 'score': 0}, {'name': 'Katie Britt', 'state': 'R-AL', 'weights': [0.5051020408163266, 0.12755102040816327, 1.0, 0.19897959183673472, 0.7959183673469389], 'score': 0}, {'name': 'Lisa Murkowski', 'state': 'R-AK', 'weights': [0.3775510204081633, 0.07653061224489796, 0.28571428571428575, 0.06122448979591838, 0.06122448979591837], 'score': 0}, {'name': 'Dan Sullivan', 'state': 'R-AK', 'weights': [0.5255102040816326, 0.1479591836734694, 0.7040816326530612, 0.16836734693877553, 0.4591836734693878], 'score': 0}, {'name': 'Kyrsten Sinema', 'state': 'I-AZ, formerly D-AZ', 'weights': [0.14285714285714288, -0.08673469387755103, 0.10204081632653063, 0.0, 0.21428571428571433], 'score': 0}, {'name': 'Mark Kelly', 'state': 'D-AZ', 'weights': [0.14285714285714288, -0.08673469387755103, 0.07142857142857144, 0.0, 0.09183673469387757], 'score': 0}, {'name': 'John Boozman', 'state': 'R-AR', 'weights': [0.38775510204081637, 0.1479591836734694, 0.5765306122448981, 0.16836734693877553, 0.2448979591836735], 'score': 0}, {'name': 'Tom Cotton', 'state': 'R-AR', 'weights': [0.5102040816326531, 0.13265306122448983, 0.7755102040816327, 0.16836734693877553, 0.6275510204081632], 'score': 0}, {'name': 'Alex Padilla', 'state': 'D-CA', 'weights': [0.14285714285714288, -0.08673469387755103, 0.07142857142857144, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Laphonza Butler', 'state': 'D-CA', 'weights': [0.163265306122449, -0.0663265306122449, 0.17346938775510207, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Michael Bennett', 'state': 'D-CO', 'weights': [0.14285714285714288, -0.163265306122449, 0.15816326530612249, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'John Hickenlooper', 'state': 'D-CO', 'weights': [0.14285714285714288, -0.08673469387755103, 0.07142857142857144, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Richard Blumenthal', 'state': 'D-CT', 'weights': [0.14285714285714288, -0.08673469387755103, 0.2091836734693878, 0.0, 0.19897959183673472], 'score': 0}, {'name': 'Chris Murphy', 'state': 'D-CT', 'weights': [-0.20408163265306126, -0.08673469387755103, 0.02040816326530612, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Tom Carper', 'state': 'D-DE', 'weights': [0.14285714285714288, -0.08673469387755103, 0.07142857142857144, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Chris Coons', 'state': 'D-DE', 'weights': [0.14795918367346939, -0.0816326530612245, 0.19387755102040818, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Marco Rubio', 'state': 'R-FL', 'weights': [0.586734693877551, 0.2704081632653062, 0.9642857142857145, 0.2602040816326531, 0.8877551020408165], 'score': 0}, {'name': 'Rick Scott', 'state': 'R-FL', 'weights': [0.6632653061224489, 0.05102040816326532, 0.8826530612244899, 0.19897959183673472, 0.8877551020408165], 'score': 0}, {'name': 'Jon Ossoff', 'state': 'D-GA', 'weights': [-0.0816326530612245, -0.08673469387755103, 0.04591836734693878, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Raphael Warnock', 'state': 'D-GA', 'weights': [-0.20408163265306126, -0.163265306122449, -0.035714285714285726, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Brian Schatz', 'state': 'D-HI', 'weights': [-0.21938775510204084, -0.15306122448979592, -0.02551020408163265, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Mazie Hirono', 'state': 'D-HI', 'weights': [-0.1836734693877551, -0.20408163265306126, 0.10714285714285714, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Mike Crapo', 'state': 'R-ID', 'weights': [0.5051020408163266, 0.12755102040816327, 0.7448979591836735, 0.15306122448979592, 0.6887755102040817], 'score': 0}, {'name': 'Jim Risch', 'state': 'R-ID', 'weights': [0.42857142857142866, 0.12755102040816327, 0.46938775510204084, 0.15306122448979592, 0.2448979591836735], 'score': 0}, {'name': 'Dick Durbin', 'state': 'D-IL', 'weights': [-0.20408163265306126, -0.08673469387755103, -0.0663265306122449, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Tammy Duckworth', 'state': 'D-IL', 'weights': [0.14285714285714288, -0.08673469387755103, 0.11224489795918367, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Todd Young', 'state': 'R-IN', 'weights': [0.3775510204081633, 0.07653061224489796, 0.3622448979591837, 0.06122448979591838, 0.13775510204081634], 'score': 0}, {'name': 'Mike Braun', 'state': 'R-IN', 'weights': [0.5000000000000001, 0.0663265306122449, 0.45408163265306123, 0.06122448979591838, 0.47448979591836743], 'score': 0}, {'name': 'Chuck Grassley', 'state': 'R-IA', 'weights': [0.38775510204081637, 0.0663265306122449, 0.5816326530612245, 0.06122448979591838, 0.4591836734693878], 'score': 0}, {'name': 'Joni Ernst', 'state': 'R-IA', 'weights': [0.5153061224489797, 0.13775510204081634, 0.6683673469387755, 0.18367346938775514, 0.489795918367347], 'score': 0}, {'name': 'Jerry Moran', 'state': 'R-KS', 'weights': [0.3775510204081633, 0.13775510204081634, 0.5153061224489797, 0.06122448979591838, 0.39795918367346944], 'score': 0}, {'name': 'Roger Marshall', 'state': 'R-KS', 'weights': [0.9642857142857145, 0.12755102040816327, 0.34693877551020413, 0.06122448979591838, 0.21428571428571433], 'score': 0}, {'name': 'Mitch McConnell', 'state': 'R-KY', 'weights': [0.3775510204081633, 0.07653061224489796, 0.3163265306122449, 0.06122448979591838, 0.13775510204081634], 'score': 0}, {'name': 'Rand Paul', 'state': 'R-KY', 'weights': [0.23469387755102042, 0.12755102040816327, 0.326530612244898, 0.06122448979591838, 0.06122448979591837], 'score': 0}, {'name': 'Bill Cassidy', 'state': 'R-LA', 'weights': [0.3775510204081633, 0.13775510204081634, 0.46938775510204095, 0.06122448979591838, 0.35204081632653067], 'score': 0}, {'name': 'John Kennedy', 'state': 'R-LA', 'weights': [0.5255102040816326, 0.0663265306122449, 0.5510204081632654, 0.16836734693877553, 0.2755102040816327], 'score': 0}, {'name': 'Susan Collins', 'state': 'R-ME', 'weights': [0.3775510204081633, 0.13775510204081634, 0.6020408163265307, 0.06122448979591838, 0.5204081632653061], 'score': 0}, {'name': 'Angus King', 'state': 'I-ME (D-ME)', 'weights': [-0.20408163265306126, -0.163265306122449, -0.01020408163265307, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Ben Cardin', 'state': 'D-MD', 'weights': [0.14285714285714288, -0.08673469387755103, 0.11734693877551021, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Chris Van Hollen', 'state': 'D-MD', 'weights': [-0.1836734693877551, -0.2806122448979592, 0.09183673469387754, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Elizabeth Warren', 'state': 'D-MA', 'weights': [-0.30612244897959184, -0.14285714285714288, 0.09183673469387754, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Ed Markey', 'state': 'D-MA', 'weights': [-0.30612244897959184, -0.0663265306122449, 0.0663265306122449, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Debbie Stabenow', 'state': 'D-MI', 'weights': [0.14285714285714288, -0.163265306122449, 0.025510204081632643, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Gary Peters', 'state': 'D-MI', 'weights': [0.18877551020408165, -0.08673469387755103, 0.14285714285714288, 0.0, 0.06122448979591838], 'score': 0}, {'name': 'Amy Klobuchar', 'state': 'D-MN', 'weights': [0.14285714285714288, -0.30102040816326536, 0.1122448979591837, 0.0, 0.09183673469387757], 'score': 0}, {'name': 'Tina Smith', 'state': 'D-MN', 'weights': [-0.20408163265306126, -0.163265306122449, -0.0663265306122449, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Roger Wicker', 'state': 'R-MS', 'weights': [0.38775510204081637, 0.1479591836734694, 0.5663265306122449, 0.06122448979591838, 0.3214285714285715], 'score': 0}, {'name': 'Cindy Hyde-Smith', 'state': 'R-MS', 'weights': [0.5255102040816326, 0.08673469387755103, 0.33673469387755106, 0.09183673469387757, 0.06122448979591837], 'score': 0}, {'name': 'Josh Hawley', 'state': 'R-MO', 'weights': [0.6581632653061226, 0.16836734693877553, 0.5153061224489797, 0.06122448979591838, 0.5510204081632654], 'score': 0}, {'name': 'Eric Schmitt', 'state': 'R-MO', 'weights': [0.34693877551020413, 0.13775510204081634, 0.33673469387755106, 0.06122448979591838, 0.13775510204081634], 'score': 0}, {'name': 'Jon Tester', 'state': 'D-MT', 'weights': [0.29591836734693877, -0.08673469387755103, 0.08673469387755102, 0.0, 0.13775510204081634], 'score': 0}, {'name': 'Steve Daines', 'state': 'R-MT', 'weights': [0.5255102040816326, 0.1479591836734694, 0.7040816326530612, 0.09183673469387757, 0.8418367346938777], 'score': 0}, {'name': 'Deb Fischer', 'state': 'R-NE', 'weights': [0.5051020408163266, 0.12755102040816327, 0.7244897959183674, 0.16836734693877553, 0.6122448979591837], 'score': 0}, {'name': 'Pete Ricketts', 'state': 'R-NE', 'weights': [0.5663265306122449, 0.12755102040816327, 0.7142857142857144, 0.16836734693877553, 0.6122448979591837], 'score': 0}, {'name': 'Catherine Cortez Masto', 'state': 'D-NV', 'weights': [0.14285714285714288, -0.08673469387755103, 0.15816326530612246, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Jacky Rosen', 'state': 'D-NV', 'weights': [0.14285714285714288, 0.03571428571428572, 0.326530612244898, 0.0, 0.35204081632653067], 'score': 0}, {'name': 'Jeanne Shaeen', 'state': 'D-NH', 'weights': [-0.20408163265306126, -0.08673469387755103, 0.04081632653061224, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Maggie Hassan', 'state': 'D-NH', 'weights': [0.14285714285714288, -0.08673469387755103, 0.07142857142857144, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Bob Menendez', 'state': 'D-NJ', 'weights': [-0.03061224489795919, -0.08673469387755103, 0.04081632653061226, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Cory Booker', 'state': 'D-NJ', 'weights': [0.020408163265306128, -0.163265306122449, 0.07142857142857142, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Martin Heinrich', 'state': 'D-NM', 'weights': [-0.1836734693877551, -0.0663265306122449, 0.0663265306122449, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Ben Ray Luján', 'state': 'D-NM', 'weights': [-0.1836734693877551, -0.0663265306122449, 0.051020408163265314, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Chuck Schumer', 'state': 'D-NY', 'weights': [0.14285714285714288, -0.08673469387755103, 0.07142857142857144, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Kirsten Gillibrand', 'state': 'D-NY', 'weights': [0.14285714285714288, -0.08673469387755103, 0.2653061224489796, 0.0, 0.12244897959183675], 'score': 0}, {'name': 'Thom Tillis', 'state': 'R-NC', 'weights': [0.5153061224489797, 0.13775510204081634, 0.5918367346938775, 0.06122448979591838, 0.5204081632653063], 'score': 0}, {'name': 'Ted Budd', 'state': 'R-NC', 'weights': [0.5510204081632654, 0.12755102040816327, 0.8520408163265306, 0.2908163265306123, 0.5204081632653061], 'score': 0}, {'name': 'John Hoeven', 'state': 'R-ND', 'weights': [0.5459183673469388, 0.13775510204081634, 0.6224489795918368, 0.06122448979591838, 0.6122448979591837], 'score': 0}, {'name': 'Kevin Cramer', 'state': 'R-ND', 'weights': [0.5153061224489797, 0.13775510204081634, 0.6989795918367347, 0.16836734693877553, 0.5816326530612245], 'score': 0}, {'name': 'Sherrod Brown', 'state': 'D-OH', 'weights': [0.14285714285714288, -0.08673469387755103, 0.163265306122449, 0.09183673469387756, 0.015306122448979595], 'score': 0}, {'name': 'JD Vance*', 'state': 'R-OH', 'weights': [0.6377551020408164, 0.0, 0.35204081632653067, 0.06122448979591838, 0.3061224489795919], 'score': 0}, {'name': 'James Lankford', 'state': 'R-OK', 'weights': [0.5153061224489797, 0.13775510204081634, 0.6683673469387754, 0.19897959183673472, 0.5051020408163266], 'score': 0}, {'name': 'Markwayne Mullin', 'state': 'R-OK', 'weights': [0.3673469387755102, 0.12755102040816327, 0.5306122448979592, 0.06122448979591838, 0.35204081632653067], 'score': 0}, {'name': 'Ron Wyden', 'state': 'D-OR', 'weights': [0.020408163265306128, -0.08673469387755103, 0.14285714285714288, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Jeff Merkley', 'state': 'D-OR', 'weights': [-0.4234693877551021, -0.14285714285714288, -0.04081632653061226, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Bob Casey Jr.', 'state': 'D-PA', 'weights': [0.18877551020408165, -0.08673469387755103, 0.17346938775510207, 0.0, 0.21428571428571427], 'score': 0}, {'name': 'John Fetterman', 'state': 'D-PA', 'weights': [0.14285714285714288, -0.08673469387755103, 0.14285714285714288, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Jack Reed', 'state': 'D-RI', 'weights': [0.14285714285714288, -0.08673469387755103, 0.07142857142857144, 0.0, 1.4161007967157611e-18], 'score': 0}, {'name': 'Sheldon Whitehouse', 'state': 'D-RI', 'weights': [0.14285714285714288, -0.08673469387755103, 0.12755102040816327, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Lindsey Graham', 'state': 'R-SC', 'weights': [0.5153061224489797, -0.005102040816326531, 0.7142857142857144, 0.16836734693877553, 0.6122448979591837], 'score': 0}, {'name': 'Tim Scott', 'state': 'R-SC', 'weights': [0.5714285714285715, 0.12755102040816327, 0.6836734693877551, 0.09183673469387757, 0.42857142857142866], 'score': 0}, {'name': 'John Thune', 'state': 'R-SD', 'weights': [0.5153061224489797, 0.13775510204081634, 0.6836734693877551, 0.16836734693877553, 0.42857142857142866], 'score': 0}, {'name': 'Mike Rounds', 'state': 'R-SD', 'weights': [0.38775510204081637, 0.1479591836734694, 0.42857142857142866, 0.06122448979591838, 0.2602040816326531], 'score': 0}, {'name': 'Marsha Blackburn', 'state': 'R-TN', 'weights': [0.8214285714285714, 0.13775510204081634, 0.9489795918367349, 0.2908163265306123, 0.75], 'score': 0}, {'name': 'Bill Hagerty', 'state': 'R-TN', 'weights': [0.3775510204081633, 0.07653061224489796, 0.6428571428571429, 0.16836734693877553, 0.5357142857142858], 'score': 0}, {'name': 'John Cornyn', 'state': 'R-TX', 'weights': [0.3469387755102041, 0.07653061224489796, 0.5765306122448981, 0.09183673469387757, 0.413265306122449], 'score': 0}, {'name': 'Ted Cruz', 'state': 'R-TX', 'weights': [0.8520408163265306, 0.2295918367346939, 0.5459183673469388, 0.15306122448979592, 0.39795918367346944], 'score': 0}, {'name': 'Mike Lee', 'state': 'R-UT', 'weights': [0.6734693877551021, 0.12755102040816327, 0.5459183673469389, 0.15306122448979592, 0.35204081632653067], 'score': 0}, {'name': 'Mitt Romney', 'state': 'R-UT', 'weights': [0.38775510204081637, 0.08673469387755103, 0.38265306122448983, 0.06122448979591838, 0.13775510204081634], 'score': 0}, {'name': 'Bernie Sanders', 'state': 'I-VT (D-VT)', 'weights': [-0.6479591836734695, -0.30612244897959184, -0.16836734693877553, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Peter Welch', 'state': 'D-VT', 'weights': [-0.5, -0.2806122448979592, -0.08673469387755103, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Mark Warner', 'state': 'D-VA', 'weights': [0.14285714285714288, -0.163265306122449, 0.12755102040816327, 0.0, 0.03061224489795919], 'score': 0}, {'name': 'Tim Kaine', 'state': 'D-VA', 'weights': [-0.20408163265306126, -0.163265306122449, -0.025510204081632668, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Patty Murray', 'state': 'D-WA', 'weights': [0.14285714285714288, -0.163265306122449, 0.025510204081632643, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Maria Cantwell', 'state': 'D-WA', 'weights': [0.14285714285714288, -0.08673469387755103, 0.04081632653061224, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'Joe Manchin', 'state': 'D-WV', 'weights': [0.14285714285714288, 0.07653061224489796, 0.20918367346938785, 0.0, 0.33673469387755106], 'score': 0}, {'name': 'Shelley Capito', 'state': 'R-WV', 'weights': [0.3775510204081633, 0.13775510204081634, 0.576530612244898, 0.06122448979591838, 0.47448979591836743], 'score': 0}, {'name': 'Ron Johnson', 'state': 'R-WI', 'weights': [0.6734693877551021, 0.12755102040816327, 0.4387755102040817, 0.06122448979591838, 0.21428571428571433], 'score': 0}, {'name': 'Tammy Baldwin', 'state': 'D-WI', 'weights': [-0.03061224489795919, -0.08673469387755103, 0.01020408163265307, 0.0, 0.015306122448979595], 'score': 0}, {'name': 'John Barasso', 'state': 'R-WY', 'weights': [0.5255102040816326, 0.0663265306122449, 0.7806122448979593, 0.2602040816326531, 0.5357142857142858], 'score': 0}, {'name': 'Cynthia Lummis', 'state': 'R-WY', 'weights': [0.9744897959183675, 0.07653061224489796, 0.5153061224489798, 0.06122448979591838, 0.48979591836734704], 'score': 0}];

function App() {
    const [senators, setSenators] = useState(initialSenators.map(senator => ({
      ...senator,
      formalName: `Sen. ${senator.name}`
    })));
    const [sliderValues, setSliderValues] = useState({
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
      q5: 0,
    });
  
    const handleSliderChange = (question, value) => {
      const mappedValue = (value - 3) / 3; // Map 0-6 to -1 to 1
      setSliderValues((prevValues) => ({ ...prevValues, [question]: mappedValue }));
    };
  
    const handleSubmit = () => {
      // Find the maximum possible Euclidean distance
      const maxDistance = Math.sqrt(5); // 5 dimensions, each ranging from -1 to 1
  
      const updatedSenators = senators.map((senator) => {
        const userVector = ['q1', 'q2', 'q3', 'q4', 'q5'].map(key => sliderValues[key]);
        const senatorVector = senator.weights;
  
        const distance = Math.sqrt(
          userVector.reduce((sum, userValue, index) => {
            const diff = userValue - senatorVector[index];
            return sum + diff * diff;
          }, 0)
        );
  
        
        const alignmentScore = Math.max(
          0, 
          100 * (1 - (distance / maxDistance))
        );
  
        return { 
          ...senator, 
          score: alignmentScore 
        };
      });
  
      updatedSenators.sort((a, b) => b.score - a.score);
      setSenators(updatedSenators);
    };
  
    const handleInfoClick = (e) => {
      e.target.classList.add('flash');
      setTimeout(() => {
        e.target.classList.remove('flash');
      }, 300);
      window.location = "https://github.com/PoliticalComputerScience/GazaLegislativeScorecard";
    };

    const handleWriteupClick = (e) => {
      e.target.classList.add('flash');
      setTimeout(() => {
        e.target.classList.remove('flash');
      }, 300);
      window.location = "https://github.com/PoliticalComputerScience/GazaLegislativeScorecard";
    };
  
    const drawAlignmentCircle = (ctx, alignment) => {
      const radius = 40;
      const lineWidth = 10;
      const centerX = 50; 
      const centerY = 50; 
      const endAngle = (Math.PI * 2 * alignment) / 100;
  
      // Function to calculate color
      const getColorForScore = (score) => {
        if (score < 50) {
          const redIntensity = Math.min(255, Math.floor((score / 50) * 255));
          return `rgb(${redIntensity}, 0, 0)`;
        } else if (score < 80) {
          const yellowIntensity = Math.min(255, Math.floor(((score - 50) / 30) * 255));
          return `rgb(255, ${yellowIntensity}, 0)`; 
        } else {
          const greenIntensity = Math.min(255, Math.floor(((score - 80) / 20) * 255));
          return `rgb(0, ${greenIntensity}, 0)`; 
        }
      };
  
      ctx.clearRect(0, 0, 100, 100);
  
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = '#ddd';
      ctx.lineWidth = lineWidth;
      ctx.stroke();
  
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, endAngle);
      ctx.strokeStyle = getColorForScore(alignment);
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };
  
    return (
        <div className="App">
      {/* Title Section */}
      <div className="title-card">
        <div className="titles-section">
          <h1>Gaza Legislative Scorecard</h1>
        </div>
        <div className="button-container">
          <button onClick={handleInfoClick}>More Info</button>
          <button onClick={handleWriteupClick}>Research Writeup</button>
        </div>
      </div>
      <div className="subtitle-container">
        <p>Please choose where you align, with the closer your dot is to a statement showing your preference.</p>
      </div>
  
        {/* Slider Section */}
        <div className="sliders-container">
          {[
            {
              id: 'q1',
              left: 'The United States government should immediately and unconditionally stop all sales of weapons to Israel',
              right: 'The United States government should increase military aid to Israel substantially and unconditionally for whatever amount of weaponry Israel requires',
            },
            {
              id: 'q2',
              left: 'The United States government should substantially and unconditionally increase humanitarian aid to Gaza, the West Bank, and southern Lebanon until each region is stable and fully rebuilt',
              right: 'The United States should immediately and unconditionally cease to provide humanitarian aid to Gaza and the West Bank',
            },
            {
              id: 'q3',
              left: 'The United States should immediately issue a resolution stating that the war between Israel and Hamas was the product of Israeli occupation...',
              right: 'The United States should immediately issue a resolution stating that the war between Israel and Hamas was exclusively the product of Hamas\'s aggression...',
            },
            {
              id: 'q4',
              left: 'Protests on college campuses are entirely justified. All actions taken by protestors have been legitimate acts of political resistance.',
              right: 'Protests on college campuses are entirely unjustified. Actions taken by protestors are universally illegitimate.',
            },
            {
              id: 'q5',
              left: 'the United States should unconditionally support an end to conflict between Israel and Hamas under which Israel ceases the construction of settlements on Palestinian land and commit itself to a 2 state solution with protections for Palestinian sovereignty',
              right: 'the United States should reject any proposal for ceasefire until such time as Israel has achieved each of its war aims. the united states should support continued Israeli governance of itself and Palestine and should reject any attempt at a 2 state solution',
            },
          ].map((question) => (
            <div key={question.id} className="slider-wrapper">
              <div className="slider-text">
                <p className="left-statement">{question.left}</p>
                <p className="right-statement">{question.right}</p>
              </div>
              <input
                type="range"
                min="0"
                max="6"
                defaultValue="3"
                onChange={(e) => handleSliderChange(question.id, parseInt(e.target.value))}
              />
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
  
        {/* Senator Section */}
        <div className="senator-section">
          <div className="senator-grid">
            {senators.map((senator, index) => (
              <div key={index} className="senator-card">
                <div className="senator-quadrant photo-quadrant">
                  <img
                    src={senatorImages[senator.name] || '/api/placeholder/100/100'}
                    alt={`${senator.name}'s profile`}
                    className="senator-photo"
                  />
                </div>
                <div className="senator-quadrant name-quadrant">
                  <h3>{senator.formalName}</h3>
                </div>
                <div className="senator-quadrant state-quadrant">
                  <p>State: {senator.state}</p>
                </div>
                <div className="senator-quadrant alignment-quadrant">
                  <p>Alignment: <span>{senator.score.toFixed(2)}%</span></p>
                  <canvas
                    className="alignment-circle"
                    width="100"
                    height="100"
                    ref={(canvas) => {
                      if (canvas) {
                        const ctx = canvas.getContext('2d');
                        drawAlignmentCircle(ctx, senator.score);
                      }
                    }}
                  ></canvas>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default App;