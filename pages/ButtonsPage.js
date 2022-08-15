import { Component } from "react";
import Page from "./Page_index";
import Chatting from "./Page_chatting_index";
import Page_chatting_about_me_index from "./Page_chatting_about_me_index";
import Page_chatting_about_you_index from "./Page_chatting_about_you_index";
import Page_chatting_WML_index from "./Page_chatting_WML_index";
import Page_questions_index from "./Page_questions_index";
import Page_personal_care_index from "./Page_personal_care_index";
import Page_personal_care_body_parts_index from "./Page_personal_care_body_parts_index";
import Page_personal_care_clothes_index from "./Page_personal_care_clothes_index";
import Page_personal_care_not_well_index from "./Page_personal_care_not_well_index";
import Page_personal_care_private_parts_index from "./Page_personal_care_private_parts_index";
import Page_things_index from "./Page_things_index";
import Page_things_art_things_index from "./Page_things_art_things_index";
import Page_things_clothes_index from "./Page_things_clothes_index";
import Page_things_computer_index from "./Page_things_computer_index";
import Page_things_furniture_index from "./Page_things_furniture_index";
import Page_things_health_index from "./Page_things_health_index";
import Page_things_help_index from "./Page_things_help_index";
import Page_things_kitchen_things_index from "./Page_things_kitchen_things_index";
import Page_things_materials_index from "./Page_things_materials_index";
import Page_things_money_index from "./Page_things_money_index";
import Page_things_nature_index from "./Page_things_nature_index";
import Page_things_nature_animals_index from "./Page_things_nature_animals_index";
import Page_things_nature_animals_birds_index from "./Page_things_nature_animals_birds_index";
import Page_things_nature_animals_farm_index from "./Page_things_nature_animals_farm_index";
import Page_things_nature_animals_insects_index from "./Page_things_nature_animals_insects_index";
import Page_things_nature_animals_pet_care_index from "./Page_things_nature_animals_pet_care_index";
import Page_things_nature_animals_pets_index from "./Page_things_nature_animals_pets_index";
import Page_things_nature_animals_water_index from "./Page_things_nature_animals_water_index";
import Page_things_nature_animals_wild_index from "./Page_things_nature_animals_wild_index";
import Page_things_nature_gardening_index from "./Page_things_nature_gardening_index";
import Page_things_nature_weather_index from "./Page_things_nature_weather_index";
import Page_things_office_index from "./Page_things_office_index";
import Page_things_sports_index from "./Page_things_sports_index";
import Page_things_things_index from "./Page_things_things_index";
import Page_things_toiletries_index from "./Page_things_toiletries_index";
import Page_things_tools_index from "./Page_things_tools_index";
import Page_things_toys_index from "./Page_things_toys_index";
import Page_things_transport_index from "./Page_things_transport_index";
import Page_action_words_index from "./Page_action_words_index";
import Page_action_words_more_index from "./Page_action_words_more_index";
import Page_action_words_more_more_index from "./Page_action_words_more_more_index";
import Page_people_index from "./Page_people_index";
import Page_people_family_index from "./Page_people_family_index";
import Page_people_friends_index from "./Page_people_friends_index";
import Page_people_job_index from "./Page_people_job_index";
import Page_people_support_staff_index from "./Page_people_support_staff_index";
import Page_people_work_mates_index from "./Page_people_work_mates_index";
import Page_people_education_staff_index from "./Page_people_education_staff_index";
import Page_describing_index from "./Page_describing_index";
import Page_describing_colours_index from "./Page_describing_colours_index";
import Page_describing_feelings_index from "./Page_describing_feelings_index";
import Page_describing_opposites_index from "./Page_describing_opposites_index";
import Page_describing_shapes_index from "./Page_describing_shapes_index";
import Page_my_day_index from "./Page_my_day_index";
import Page_my_day_numbers_index from "./Page_my_day_numbers_index";
import Page_my_day_spelling_index from "./Page_my_day_spelling_index";
import Page_my_day_spelling_nz from "./Page_my_day_spelling_nz";
import Page_places_index from "./Page_places_index";
import Page_places_home_index from "./Page_places_home_index";
import Page_places_outside_index from "./Page_places_outside_index";
import Page_places_shops_index from "./Page_places_shops_index";
import Page_leisure_index from "./Page_leisure_index";
import Page_leisure_phone_index from "./Page_leisure_phone_index";
import Page_leisure_want_index from "./Page_leisure_want_index";
import Page_little_words_index from "./Page_little_words_index";
import Page_little_words_position_words_index from "./Page_little_words_position_words_index";
import Page_time_index from "./Page_time_index";
import Page_time_day_index from "./Page_time_day_index";
import Page_time_months_index from "./Page_time_months_index";
import Page_time_special_days_index from "./Page_time_special_days_index";
import Page_time_special_days_christmas_index from "./Page_time_special_days_christmas_index";
import Page_food_index from "./Page_food_index";
import Page_food_breakfast_index from "./Page_food_breakfast_index";
import Page_food_cooking_index from "./Page_food_cooking_index";
import Page_food_drinks_index from "./Page_food_drinks_index";
import Page_food_drinks_alcohol_index from "./Page_food_drinks_alcohol_index";
import Page_food_drinks_describing_index from "./Page_food_drinks_describing_index";
import Page_food_drinks_fizzy_index from "./Page_food_drinks_fizzy_index";
import Page_food_drinks_juice_index from "./Page_food_drinks_juice_index";
import Page_food_drinks_milkshake_index from "./Page_food_drinks_milkshake_index";
import Page_food_fast_food_index from "./Page_food_fast_food_index";
import Page_food_flavours_index from "./Page_food_flavours_index";
import Page_food_food_chat_index from "./Page_food_food_chat_index";
import Page_food_fruit_index from "./Page_food_fruit_index";
import Page_food_lunch_index from "./Page_food_lunch_index";
import Page_food_meals_index from "./Page_food_meals_index";
import Page_food_meat_fish_index from "./Page_food_meat_fish_index";
import Page_food_salad_index from "./Page_food_salad_index";
import Page_food_sauces_index from "./Page_food_sauces_index";
import Page_food_snacks_index from "./Page_food_snacks_index";
import Page_food_vegetables_index from "./Page_food_vegetables_index";
import Page_food_vegetables_potato_index from "./Page_food_vegetables_potato_index";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PageNavigator = createNativeStackNavigator();
export default class ButtonsPage extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <PageNavigator.Navigator>
        <PageNavigator.Screen name="Home" component={Page} />
        <PageNavigator.Screen name="Chatting" component={Chatting} />
        <PageNavigator.Screen
          name="ChattingAboutMe"
          component={Page_chatting_about_me_index}
        />
        <PageNavigator.Screen
          name="ChattingAboutYou"
          component={Page_chatting_about_you_index}
        />
        <PageNavigator.Screen
          name="ChattingWML"
          component={Page_chatting_WML_index}
        />
        <PageNavigator.Screen
          name="Questions"
          component={Page_questions_index}
        />
        <PageNavigator.Screen
          name="PersonalCare"
          component={Page_personal_care_index}
        />
        <PageNavigator.Screen
          name="Personal_care_body_parts"
          component={Page_personal_care_body_parts_index}
        />
        <PageNavigator.Screen
          name="Personal_care_clothes"
          component={Page_personal_care_clothes_index}
        />
        <PageNavigator.Screen
          name="Personal_care_not_well"
          component={Page_personal_care_not_well_index}
        />
        <PageNavigator.Screen
          name="Personal_care_private_parts"
          component={Page_personal_care_private_parts_index}
        />
        <PageNavigator.Screen name="Thing" component={Page_things_index} />
        <PageNavigator.Screen
          name="Things_art_things"
          component={Page_things_art_things_index}
        />
        <PageNavigator.Screen
          name="Things_clothes"
          component={Page_things_clothes_index}
        />
        <PageNavigator.Screen
          name="Things_computer"
          component={Page_things_computer_index}
        />
        <PageNavigator.Screen
          name="Things_furniture"
          component={Page_things_furniture_index}
        />
        <PageNavigator.Screen
          name="Things_health"
          component={Page_things_health_index}
        />
        <PageNavigator.Screen
          name="Things_help"
          component={Page_things_help_index}
        />
        <PageNavigator.Screen
          name="Things_kitchen_things"
          component={Page_things_kitchen_things_index}
        />
        <PageNavigator.Screen
          name="Things_materials"
          component={Page_things_materials_index}
        />
        <PageNavigator.Screen
          name="Things_money"
          component={Page_things_money_index}
        />
        <PageNavigator.Screen
          name="Things_nature"
          component={Page_things_nature_index}
        />
        <PageNavigator.Screen
          name="Things_nature_animals"
          component={Page_things_nature_animals_index}
        />
        <PageNavigator.Screen
          name="Things_nature_animals_birds"
          component={Page_things_nature_animals_birds_index}
        />
        <PageNavigator.Screen
          name="Things_nature_animals_farm"
          component={Page_things_nature_animals_farm_index}
        />
        <PageNavigator.Screen
          name="Things_nature_animals_insects"
          component={Page_things_nature_animals_insects_index}
        />
        <PageNavigator.Screen
          name="Things_nature_animals_pet_care"
          component={Page_things_nature_animals_pet_care_index}
        />
        <PageNavigator.Screen
          name="Things_nature_animals_pets"
          component={Page_things_nature_animals_pets_index}
        />
        <PageNavigator.Screen
          name="Things_nature_animals_water"
          component={Page_things_nature_animals_water_index}
        />
        <PageNavigator.Screen
          name="Things_nature_animals_wild"
          component={Page_things_nature_animals_wild_index}
        />
        <PageNavigator.Screen
          name="Things_nature_gardening"
          component={Page_things_nature_gardening_index}
        />
        <PageNavigator.Screen
          name="Things_nature_weather"
          component={Page_things_nature_weather_index}
        />
        <PageNavigator.Screen
          name="Things_office"
          component={Page_things_office_index}
        />
        <PageNavigator.Screen
          name="Things_sports"
          component={Page_things_sports_index}
        />
        <PageNavigator.Screen
          name="Things_things"
          component={Page_things_things_index}
        />
        <PageNavigator.Screen
          name="Things_toiletries"
          component={Page_things_toiletries_index}
        />
        <PageNavigator.Screen
          name="Things_tools"
          component={Page_things_tools_index}
        />
        <PageNavigator.Screen
          name="Things_toys"
          component={Page_things_toys_index}
        />
        <PageNavigator.Screen
          name="Things_transport"
          component={Page_things_transport_index}
        />
        <PageNavigator.Screen
          name="Action_words"
          component={Page_action_words_index}
        />
        <PageNavigator.Screen
          name="Action_words_more"
          component={Page_action_words_more_index}
        />
        <PageNavigator.Screen
          name="Action_words_more_more"
          component={Page_action_words_more_more_index}
        />
        <PageNavigator.Screen name="People" component={Page_people_index} />
        <PageNavigator.Screen
          name="People_family"
          component={Page_people_family_index}
        />
        <PageNavigator.Screen
          name="People_friends"
          component={Page_people_friends_index}
        />
        <PageNavigator.Screen
          name="People_job"
          component={Page_people_job_index}
        />
        <PageNavigator.Screen
          name="People_support_staff"
          component={Page_people_support_staff_index}
        />
        <PageNavigator.Screen
          name="People_work_mates"
          component={Page_people_work_mates_index}
        />
        <PageNavigator.Screen
          name="People_education_staff"
          component={Page_people_education_staff_index}
        />
        <PageNavigator.Screen
          name="Describing"
          component={Page_describing_index}
        />
        <PageNavigator.Screen
          name="Describing_colours"
          component={Page_describing_colours_index}
        />
        <PageNavigator.Screen
          name="Describing_feelings"
          component={Page_describing_feelings_index}
        />
        <PageNavigator.Screen
          name="Describing_opposites"
          component={Page_describing_opposites_index}
        />
        <PageNavigator.Screen
          name="Describing_shapes"
          component={Page_describing_shapes_index}
        />
        <PageNavigator.Screen name="My_day" component={Page_my_day_index} />
        <PageNavigator.Screen
          name="My_day_numbers"
          component={Page_my_day_numbers_index}
        />
        <PageNavigator.Screen
          name="My_day_spelling"
          component={Page_my_day_spelling_index}
        />
        <PageNavigator.Screen
          name="My_day_spelling_nz"
          component={Page_my_day_spelling_nz}
        />
        <PageNavigator.Screen name="Places" component={Page_places_index} />
        <PageNavigator.Screen
          name="Places_home"
          component={Page_places_home_index}
        />
        <PageNavigator.Screen
          name="Places_outside"
          component={Page_places_outside_index}
        />
        <PageNavigator.Screen
          name="Places_shops"
          component={Page_places_shops_index}
        />
        <PageNavigator.Screen name="Leisure" component={Page_leisure_index} />
        <PageNavigator.Screen
          name="Leisure_phone"
          component={Page_leisure_phone_index}
        />
        <PageNavigator.Screen
          name="Leisure_want"
          component={Page_leisure_want_index}
        />
        <PageNavigator.Screen
          name="Little_words"
          component={Page_little_words_index}
        />
        <PageNavigator.Screen
          name="Little_words_position_words"
          component={Page_little_words_position_words_index}
        />
        <PageNavigator.Screen name="Time" component={Page_time_index} />
        <PageNavigator.Screen
          name="Time_day"
          component={Page_time_day_index}
        />
        <PageNavigator.Screen
          name="Time_months"
          component={Page_time_months_index}
        />
        <PageNavigator.Screen
          name="Time_special_days"
          component={Page_time_special_days_index}
        />
        <PageNavigator.Screen
          name="Time_special_days_christmas"
          component={Page_time_special_days_christmas_index}
        />
        <PageNavigator.Screen name="Food" component={Page_food_index} />
        <PageNavigator.Screen
          name="Food_breakfast"
          component={Page_food_breakfast_index}
        />
        <PageNavigator.Screen
          name="Food_cooking"
          component={Page_food_cooking_index}
        />
        <PageNavigator.Screen
          name="Food_drinks"
          component={Page_food_drinks_index}
        />
        <PageNavigator.Screen
          name="Food_drinks_alcohol"
          component={Page_food_drinks_alcohol_index}
        />
        <PageNavigator.Screen
          name="Food_drinks_describing"
          component={Page_food_drinks_describing_index}
        />
        <PageNavigator.Screen
          name="Food_drinks_fizzy"
          component={Page_food_drinks_fizzy_index}
        />
        <PageNavigator.Screen
          name="Food_drinks_juice"
          component={Page_food_drinks_juice_index}
        />
        <PageNavigator.Screen
          name="Food_drinks_milkshake"
          component={Page_food_drinks_milkshake_index}
        />
        <PageNavigator.Screen
          name="Food_fast_food"
          component={Page_food_fast_food_index}
        />
        <PageNavigator.Screen
          name="Food_flavours"
          component={Page_food_flavours_index}
        />
        <PageNavigator.Screen
          name="Food_food_chat"
          component={Page_food_food_chat_index}
        />
        <PageNavigator.Screen
          name="Food_fruit"
          component={Page_food_fruit_index}
        />
        <PageNavigator.Screen
          name="Food_lunch"
          component={Page_food_lunch_index}
        />
        <PageNavigator.Screen
          name="Food_meals"
          component={Page_food_meals_index}
        />
        <PageNavigator.Screen
          name="Food_meat_fish"
          component={Page_food_meat_fish_index}
        />
        <PageNavigator.Screen
          name="Food_salad"
          component={Page_food_salad_index}
        />
        <PageNavigator.Screen
          name="Food_sauces"
          component={Page_food_sauces_index}
        />
        <PageNavigator.Screen
          name="Food_snacks"
          component={Page_food_snacks_index}
        />
        <PageNavigator.Screen
          name="Food_vegetables"
          component={Page_food_vegetables_index}
        />
        <PageNavigator.Screen
          name="Food_vegetables_potato"
          component={Page_food_vegetables_potato_index}
        />
      </PageNavigator.Navigator>
    )
  }
}