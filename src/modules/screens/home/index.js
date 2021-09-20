import React from "react";
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from "react-native"
import { NativeBaseProvider, Box } from 'native-base';
import { primaryColor } from '../../../setup/config'
import style from '../../../styles/baseStyle';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { connect } from 'react-redux'
import { dataArray } from '../../../../common'
import { RESTAURANT_DETAILS, ADDRESS_DATA } from '../../provider/restaurant.action'
import { store } from '../../../setup/store'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            addressField: '',
        }
    }
    componentDidMount() {
        if (dataArray && dataArray.restaurants) {
            this.setState({ data: dataArray.restaurants })
            this.locationData(dataArray.restaurants)
        }



    }
    locationData = (data) => {
        let temp = []
        data.map(ele => {
            temp.push(ele.address)
        })
        // adding location data to store
        store.dispatch({
            type: ADDRESS_DATA,
            addressData: temp
        });
    }

    // navigation to searchlist page
    navigatePress(text) {
        const { data } = this.state;
        this.props.navigation.navigate('AddressSearching', { Address: text, data: data })
        this.setState({ addressField: '' })
    }

    // navigation to Restaurant Details
    navigationToDetailsPage(item) {
        store.dispatch({
            type: RESTAURANT_DETAILS,
            restaurantDetails: item
        });
        this.props.navigation.navigate('RestaurantDetails')
    }
    render() {
        const { data } = this.state
        return (
            <View style={{ flex: 1, padding: 15 }}>
                <View style={style.textBoxRow}>
                    <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                        <EvilIcons name='search' style={{ color: primaryColor, fontSize: 25 }} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Search for Resturants     '
                        style={{ fontSize: 12, width: "90%", }}
                        placeholderTextColor="#C1C1C1"
                        keyboardType={'default'}
                        value={this.state.addressField}
                        onChangeText={(text) => this.navigatePress(text)}
                        returnKeyType={'go'}
                        multiline={false}
                        blurOnSubmit={false}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                    <FlatList horizontal={false} numColumns={2}
                        data={data}
                        renderItem={({ item, index }) =>
                            <Box flex={0.5} bg="#fff"
                                bg="white"
                                rounded="lg"
                                p={2}
                                shadow={1}
                                style={{
                                    marginHorizontal: 5, marginVertical: 10, minHeight: 100
                                }}>
                                <TouchableOpacity onPress={() => this.navigationToDetailsPage(item)}>
                                    <Image source={require("../../../../assets/images/ResturantImage.jpg")}
                                        style={{ height: 100, width: '100%', borderColor: primaryColor, borderWidth: 0.5, borderRadius: 5 }} />
                                    <Text style={style.headingText} numberOfLines={2}>{item.name} </Text>
                                    <View style={[style.marginspaceText, { flexDirection: 'row', width: '90%', marginLeft: -5 }]}>
                                        <EvilIcons name="location" style={style.iconStyle} />
                                        <Text style={style.locationText} numberOfLines={2}>{item.address}</Text>
                                    </View>
                                </TouchableOpacity>
                            </Box>
                        } />
                </View>
            </View>
        )
    }
}



function HomeState(state) {
    return {
        user: state.user,
    };
}
export default connect(HomeState)(Home);
