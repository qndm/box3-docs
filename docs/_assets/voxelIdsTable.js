const voxelTypes = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","acacia","add","air","air_duct","ampersand","asterisk","at","backslash","bamboo","bat_window","bear_footprint","biscuit","black","black_glass","blue","blue_decorative_light","blue_gift","blue_glass","blue_light","blue_surface_01","blue_surface_02","blueberry_juice","board0","board1","board10","board11","board12","board13","board14","board15","board2","board3","board4","board5","board6","board7","board8","board9","board_01","board_02","board_03","board_04","board_05","board_06","board_07","bookshelf","bounce_pad","bracket_close","bracket_open","brick_01","brick_02","brick_red","button","cadet_blue","candy","caret","carpet_01","carpet_02","carpet_03","carpet_04","carpet_05","carpet_06","carpet_07","carpet_08","carpet_09","carpet_10","carpet_11","carpet_12","carpet_13","coffee","coffee_gray","colon","color_glass","comma","conveyor","crane_lantern","crane_roof_01","crane_roof_02","cross_window","dark_brick_00","dark_brick_01","dark_brick_02","dark_grass","dark_gray","dark_orchid","dark_red","dark_salmon","dark_slate_blue","dark_stone","dark_surface","dirt","divide","dollar","eight","equal","exclamation_mark","express_box","fan","firecracker","five","four","fu","geometric_window_01","geometric_window_02","glass","gold_trim_brick","grape_juice","grass","greater_than","green_decorative_light","green_glass","green_leaf","green_light","greenbelt_L","greenbelt_L1","grey_stone_brick","honeycomb_01","honeycomb_02","ice","ice_brick","ice_wall","indigo_light","lab_lamp_01","lab_lamp_02","lab_lamp_03","lab_material_01","lab_material_02","lab_material_03","lab_material_04","lab_material_05","lab_material_06","lab_material_07","lab_material_08","lab_material_09","lab_material_10","lab_material_11","lab_material_12","lab_material_13","lab_material_14","lab_material_15","lab_screen","lab_wire","lantern_01","lantern_02","lava01","lava02","leaf_01","leaf_02","leaf_03","leaf_04","leaf_05","leaf_06","ledfloor01","ledfloor02","lemon","lemon_juice","less_than","light_gray","light_grey_stone_brick","lime_juice","macaroon","maroon","medium_gray","medium_green","medium_orchid","medium_purple","medium_spring_green","medium_violet_red","medium_yellow","milk","mint_green","mint_green_light","multiply","navajo_white","nine","olive_green","one","orange","orange_juice","orange_light","orange_red","palace_carving","palace_cloud","palace_eaves_01","palace_eaves_02","palace_eaves_03","palace_eaves_04","palace_eaves_05","palace_eaves_06","palace_eaves_07","palace_eaves_08","palace_floor","palace_lamp","palace_roof","palace_window","pale_green","palm","paren_close","paren_open","peach_juice","percent","period","peru","pink","pink_cake","pink_light","plank_01","plank_02","plank_03","plank_04","plank_05","plank_06","plank_07","polar_ice","polar_region","pound","powder_blue","pumpkin","pumpkin_lantern","purple","purple_surface_01","purple_surface_02","quartz_brick","question_mark","quotation_mark","rainbow_cube","red","red_brick","red_brick_floor","red_brick_wall","red_decorative_light","red_gift","red_glass","red_light","rock","roof_blue_04","roof_green","roof_grey","roof_purple","roof_red","roof_yellow","sakura_pink","sand","semicolon","seven","sienna","six","sky_blue","slash","snow","snowflake_lamp","snowland","snowman_body","snowman_head","soy_sauce","spiderweb","stained_glass","stainless_steel","star_lamp","stone","stone_brick_01","stone_brick_02","stone_pillar_03","stone_pillar_04","stone_pillar_05","stone_pillar_06","stone_wall","stone_wall_01","strawberry_juice","stripe_01","stripe_02","stripe_03","stripe_04","stripe_05","subtract","television","three","tilde","toolbox","traditional_window","treasure_chest","turquoise","two","warm_yellow_light","water","white","white_grass","white_light","window","windygrass","winter_leaf","wood","wooden_box","woodstone_12","yellow_decorative_light","yellow_grass","yellow_green","yellow_light","zero"];
const voxelTypes_Arena = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","acacia","add","air","air_duct","ampersand","asterisk","at","backslash","bamboo","barrier","bat_window","bear_footprint","biscuit","black","black_glass","blue","blue_decorative_light","blue_gift","blue_glass","blue_grass","blue_grass_all","blue_light","blue_surface_01","blue_surface_02","blueberry_juice","board0","board1","board10","board11","board12","board13","board14","board15","board2","board3","board4","board5","board6","board7","board8","board9","board_01","board_02","board_03","board_04","board_05","board_06","board_07","bookshelf","bounce_pad","bracket_close","bracket_open","brick_01","brick_02","brick_red","button","cadet_blue","candy","caret","carpet_01","carpet_02","carpet_03","carpet_04","carpet_05","carpet_06","carpet_07","carpet_08","carpet_09","carpet_10","carpet_11","carpet_12","carpet_13","coffee","coffee_gray","colon","color_glass","comma","conveyor","crane_lantern","crane_roof_01","crane_roof_02","cross_window","dark_blue_grass","dark_blue_grass_all","dark_brick_00","dark_brick_01","dark_brick_02","dark_grass","dark_grass_all","dark_grass_rock","dark_grass_sand","dark_gray","dark_orchid","dark_purple_grass","dark_purple_grass_all","dark_red","dark_red_grass","dark_red_grass_all","dark_salmon","dark_sand","dark_slate_blue","dark_stone","dark_surface","dark_volcanic_rock","dark_yellow_grass","dark_yellow_grass_all","dirt","divide","dollar","eight","equal","exclamation_mark","express_box","fan","firecracker","five","four","fu","geometric_window_01","geometric_window_02","glass","gold_trim_brick","grape_juice","grass","grass_all","grass_rock","grass_sand","greater_than","green_decorative_light","green_glass","green_leaf","green_light","greenbelt_L","greenbelt_L1","grey_stone_brick","honeycomb_01","honeycomb_02","ice","ice_brick","ice_wall","indigo_light","lab_lamp_01","lab_lamp_02","lab_lamp_03","lab_material_01","lab_material_02","lab_material_03","lab_material_04","lab_material_05","lab_material_06","lab_material_07","lab_material_08","lab_material_09","lab_material_10","lab_material_11","lab_material_12","lab_material_13","lab_material_14","lab_material_15","lab_screen","lab_wire","lantern_01","lantern_02","lava01","lava02","leaf_01","leaf_02","leaf_03","leaf_04","leaf_05","leaf_06","ledfloor01","ledfloor02","lemon","lemon_juice","less_than","light_blue_grass","light_blue_grass_all","light_dirt","light_gray","light_grey_stone_brick","light_purple_grass_","light_purple_grass_all","light_sand","light_volcanic_rock","lime_juice","macaroon","maroon","medium_gray","medium_green","medium_orchid","medium_purple","medium_spring_green","medium_violet_red","medium_yellow","milk","mint_green","mint_green_light","multiply","navajo_white","nine","olive_green","one","orange","orange_grass","orange_grass_all","orange_juice","orange_light","orange_red","palace_carving","palace_cloud","palace_eaves_01","palace_eaves_02","palace_eaves_03","palace_eaves_04","palace_eaves_05","palace_eaves_06","palace_eaves_07","palace_eaves_08","palace_floor","palace_lamp","palace_roof","palace_window","pale_green","palm","paren_close","paren_open","peach_juice","percent","period","peru","pink","pink_cake","pink_grass","pink_grass_all","pink_light","plank_01","plank_02","plank_03","plank_04","plank_05","plank_06","plank_07","polar_ice","polar_region","pound","powder_blue","pumpkin","pumpkin_lantern","purple","purple_grass","purple_grass_all","purple_surface_01","purple_surface_02","quartz_brick","question_mark","quotation_mark","rainbow_cube","red","red_brick","red_brick_floor","red_brick_wall","red_decorative_light","red_gift","red_glass","red_light","rock","roof_blue_04","roof_green","roof_grey","roof_purple","roof_red","roof_yellow","sakura_pink","sand","sand_stones","semicolon","seven","sienna","six","sky_blue","slash","snow","snow_grass","snow_land","snowflake_lamp","snowland","snowman_body","snowman_head","soy_sauce","special_grass_01","special_grass_02","special_grass_03","special_grass_04","special_grass_05","special_grass_06","special_grass_07","special_grass_08","special_grass_09","special_grass_10","special_grass_11","special_grass_12","special_grass_13","special_grass_14","special_grass_15","special_grass_16","special_land_01","special_sand_01","special_sand_02","special_sand_03","special_sand_04","special_sand_05","spiderweb","stained_glass","stainless_steel","star_lamp","stone","stone_brick_01","stone_brick_02","stone_pillar_03","stone_pillar_04","stone_pillar_05","stone_pillar_06","stone_wall","stone_wall_01","strawberry_juice","stripe_01","stripe_02","stripe_03","stripe_04","stripe_05","subtract","television","three","tilde","toolbox","traditional_window","treasure_chest","turquoise","two","warm_yellow_light","water","white","white_grass","white_light","window","windygrass","winter_leaf","withered_grass","withered_grass_land","wood","wooden_box","woodstone_12","yellow_decorative_light","yellow_grass","yellow_green","yellow_light","zero"]


/**
 * 创建一行单元格
 * @param {string[]} datas 单元格内容，支持HTML
 * @returns {HTMLTableRowElement}
 */
function createTableRow(...datas){
    const tr = document.createElement('tr');
    for(const data of datas){
        const td = document.createElement('td');
        td.innerHTML = data;
        td.classList.add('voxelsTableTableData');
        td.style.textAlign = 'center';
        tr.appendChild(td);
    }
    return tr;
}

if(new URL(document.URL).pathname === '/api/voxels/'){
    const el = document.getElementById('voxelIdsTable');
    if(el instanceof HTMLElement){
        console.log('方块速查表开始渲染');
        const table = document.createElement('table'), 
            thead = document.createElement('thead'),
            tbody = document.createElement('tbody');
        thead.appendChild(createTableRow('名称', 'id', '类别', '翻译/描述', '编辑器'));
        let voxelNames = new Set();
        for(const name of voxelTypes) voxelNames.add(name);
        for(const name of voxelTypes_Arena) voxelNames.add(name);
        let iterator = voxelNames.values();
        for(const voxelName of iterator){
            /**@type {string}*/
            let translate = voxelTypes_Translate[voxelName];
            let splitIndex = translate.indexOf('-');
            let type = splitIndex === -1 ? '' : translate.slice(0, splitIndex),
                description = translate.slice(splitIndex + 1),
                editor = ['无', '<b>仅旧版编辑器</b>', '<b>仅Arena 编辑器</b>', '通用'][(voxelTypes.includes(voxelName)) | (voxelTypes_Arena.includes(voxelName) << 1)];
            tbody.appendChild(createTableRow(voxelName, voxelTypes_ID[voxelName], type, description, editor));
        }
        table.appendChild(thead);
        table.appendChild(tbody);

        el.appendChild(table);

        console.log('方块速查表渲染完成');
    }
}