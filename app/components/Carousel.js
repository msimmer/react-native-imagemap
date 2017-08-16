import React from 'react'
import { Text, View, Image } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import Swiper from 'react-native-swiper'

import g from '../styles/grid'
import c from '../styles/carousel'

const rand = () => String(Math.random()).slice(2)

const where = (ref) => {
    const k = Object.keys(ref)[0]
    const v = Object.values(ref)[0]
    return (elem) => elem[k] === v
}

const Carousel = (props) => {
    const { id } = props.match.params
    const gallery = props.galleryContext.find(where({ id }))
    if (!gallery) { return null } // TODO: redirect/error/cleanup
    return (
        <View style={g.column}>
            <View style={c.buttonContainer}>
                <Button
                    icon={{ name: 'close' }}
                    onPress={() => props.history.goBack()}
                    buttonStyle={c.button}
                />
            </View>
            <Swiper
                showsButtons={false}
                showsPagination={false}
                loop={false}
            >
                { gallery.photos.map(photo =>
                    <View key={rand()} style={c.photo}>
                        <Image source={{ uri: photo.path }} style={c.image} />
                    </View>
                ) }
            </Swiper>
        </View>
    )
}

export default Carousel
