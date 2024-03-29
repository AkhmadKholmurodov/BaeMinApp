import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'


const FeaturedRow = ({title, description, id}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      showHorizontalScrollIndicator={false}
      className="pt-4">
        <RestaurantCard
        id={123}
        imgUrl="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/24062417/Catat-Ini-Resep-Kimbab-ala-Korea-yang-Mudah-Dibuat-di-Rumah.jpg.webp"
        title="gimbab"
        rating={5.5}
        genre="Korean"
        address="imdangdong 123"
        dishes={[]}
        long={20}
        lat={0}/>
         <RestaurantCard
        id={123}
        imgUrl="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/24062417/Catat-Ini-Resep-Kimbab-ala-Korea-yang-Mudah-Dibuat-di-Rumah.jpg.webp"
        title="gimbab"
        rating={5.5}
        genre="Korean"
        address="imdangdong 123"
        dishes={[]}
        long={20}
        lat={0}/>
         <RestaurantCard
        id={123}
        imgUrl="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/24062417/Catat-Ini-Resep-Kimbab-ala-Korea-yang-Mudah-Dibuat-di-Rumah.jpg.webp"
        title="gimbab"
        rating={5.5}
        genre="Korean"
        address="imdangdong 123"
        dishes={[]}
        long={20}
        lat={0}/>
         <RestaurantCard
        id={123}
        imgUrl="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/24062417/Catat-Ini-Resep-Kimbab-ala-Korea-yang-Mudah-Dibuat-di-Rumah.jpg.webp"
        title="gimbab"
        rating={5.5}
        genre="Korean"
        address="imdangdong 123"
        dishes={[]}
        long={20}
        lat={0}/>
         <RestaurantCard
        id={123}
        imgUrl="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/24062417/Catat-Ini-Resep-Kimbab-ala-Korea-yang-Mudah-Dibuat-di-Rumah.jpg.webp"
        title="gimbab"
        rating={5.5}
        genre="Korean"
        address="imdangdong 123"
        dishes={[]}
        long={20}
        lat={0}/>
      </ScrollView>
    </View>
  )
}

export default FeaturedRow