import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native"
import Autocomplete from '../../../../common/autocomplete';
import { connect } from 'react-redux'
import style from '../../../styles/baseStyle';
import { getKiloMeterCalculation } from '../../../../common'
import { NativeBaseProvider, Box } from 'native-base';
import { primaryColor } from '../../../setup/config'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { store } from '../../../setup/store'
import { RESTAURANT_DETAILS, } from '../../provider/restaurant.action'

class AddressSearching extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            locationData: [],
            restaurantData: [],
            listOfData: []
        }
    }
    componentDidMount() {
        const address = this.props.route.params.Address
        const data = this.props.route.params.data
        const { user: { addressData, } } = this.props;
        this.setState({ address: address, locationData: addressData, restaurantData: data })


    }
    filterLocationData(query) {

        if (query === '' || query === undefined || query === null || query === query.replace(/^[^*|\":<>[\]{}`\\()'; @& $]+$/)) {
            return [];
        }
        const { locationData } = this.state;
        const regex = new RegExp(`${query.trim()}`, 'i');
        return locationData.filter((locs) => locs && locs.search(regex) >= 0);

    }
    onChangeDetails = async (text) => {
        await this.setState({ institute: text });
    }
    showSuggestions = async (item) => {
        this.setState({ address: item, })
        const { restaurantData } = this.state
        let data = restaurantData.find(address => address.address === item)
        let temp = []
        temp.push(data)
        this.setState({ listOfData: temp })
        let selectedLocation = data.latlng
        //    let locationList= []
        //    const nextresultValue = restaurantData.map(item => { item.latlng != selectedLocation})
        //    console.log('i',nextresultValue)
        // const result= getKiloMeterCalculation(selectedLocation)
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
        const { address, listOfData } = this.state
        const locData = this.filterLocationData(address);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        return (
            <View style={{ flex: 1, padding: 15 }}>
                <View style={{ flex: listOfData.length === 0 ? 0.6 : 0.1, }}>
                    <Autocomplete style={style.pickerView}
                        data={locData.length === 1 && comp(address, locData[0]) ? [] : locData}
                        defaultValue={address}
                        onChangeText={text => this.onChangeDetails(text)}
                        placeholder="Enter Address"
                        listStyle={{ position: listOfData.length === 0 ? 'relative' : 'absolute' }}
                        renderItem={({ item, i }) => (
                            <TouchableOpacity onPress={() => this.showSuggestions(item)}>
                                <Text style={{ fontFamily: 'OpenSans', padding: 5, borderBottomWidth: 0.3, color: 'gray', marginTop: 2, fontSize: 14, }}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                {listOfData.length ?
                    <View style={{ flex: 0.9, flexDirection: "row", marginTop: 15 }}>
                        <FlatList horizontal={false} numColumns={2}
                            data={listOfData}
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
                    :
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Text>No list found</Text>
                    </View>}
            </View>
        )
    }
}


function AddressSearchingState(state) {
    return {
        user: state.user,
    };
}
export default connect(AddressSearchingState)(AddressSearching);
