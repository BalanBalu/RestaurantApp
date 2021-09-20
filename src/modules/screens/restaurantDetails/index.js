import React from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native"
import { NativeBaseProvider, Box } from 'native-base';
import { primaryColor } from '../../../setup/config'
import style from '../../../styles/baseStyle';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux'
import {
  formatDate,
} from '../../../setup/helpers';
import { TouchableOpacity } from "react-native-gesture-handler";
class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndexType: 0,
      starCount: 0,
      detailData: {},
      timeSchedules: [],
      reviews: []
    }
  }
  componentDidMount() {
    // get resturant details data
    const { user: { restaurantDetails, } } = this.props;
    this.setState({ detailData: restaurantDetails, reviews: restaurantDetails.reviews })
    this.getAvailableDays(restaurantDetails.operating_hours)
  }
  getAvailableDays = (data) => {
    // changing the days to array according to table view in design
    let temp = [];
    if (data.Monday)
      temp.push({
        day: 'Monday',
        time: data.Monday,
      });
    if (data.Tuesday)
      temp.push({
        day: 'Tuesday',
        time: data.Tuesday,
      });
    if (data.Wednesday)
      temp.push({
        day: 'Wednesday',
        time: data.Wednesday,
      });
    if (data.Thursday)
      temp.push({
        day: 'Thursday',
        time: data.Thursday,
      });
    if (data.Friday)
      temp.push({
        day: 'Friday',
        time: data.Friday,
      });
    if (data.Saturday)
      temp.push({
        day: 'Saturday',
        time: data.Saturday,
      });
    if (data.Sunday)
      temp.push({
        day: 'Sunday',
        time: data.Sunday,
      });
    this.setState({ timeSchedules: temp })

  }
  // changing the index of tab
  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndexType: index
    });
  };
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }




  render() {
    const { selectedIndexType, detailData, timeSchedules, reviews } = this.state

    return (
      <View style={{ flex: 1, padding: 15 }}>
        <ScrollView style={{ flex: 1, }}>
          <Box flex={0.09} bg="#fff"
            bg="white"
            rounded="lg"
            shadow={1}
            style={style.detailsImageHeight}>
            <Image source={require("../../../../assets/images/ResturantImage.jpg")}
              style={style.imageHeight} />
          </Box>
          <View style={style.marginSpaceLeft}>
            <Text style={style.cuisineText} >{detailData.cuisine_type}</Text>
            <Text style={style.detailHeadingText} numberOfLines={2}>{detailData.name} </Text>
            <View style={[style.marginspaceText, { flexDirection: 'row', width: '90%', marginLeft: -5 }]}>
              <EvilIcons name="location" style={style.iconStyle} />
              <Text style={style.locationText} numberOfLines={2}>{detailData.address}</Text>
            </View>
            <View style={style.orderNowView}>
              <TouchableOpacity style={style.orderButton}>
                <Text style={style.orderNowText}>Order Now</Text>
              </TouchableOpacity>
            </View>
            <SegmentedControlTab
              values={["Available hours", "Reviews"]}
              selectedIndex={this.state.selectedIndexType}
              onTabPress={this.handleIndexChange}
              activeTabStyle={{ backgroundColor: primaryColor, }}
              tabsContainerStyle={{ marginTop: 20, paddingBottom: 10 }}
              tabStyle={style.SegmentedStyle}
              tabTextStyle={{ color: primaryColor }}
            />

            {selectedIndexType === 0 ? (
              <View
                style={style.daysBorder}>
                <FlatList
                  data={timeSchedules}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (

                    <View
                      style={style.daysInnerView}>
                      <View style={{ width: '30%' }}>
                        <Text style={style.dayText}>{item.day}</Text>
                      </View>
                      <View style={{ width: '5%' }}>
                        <Text style={style.dayText}>-</Text>
                      </View>
                      <View style={{ width: '65%' }}>
                        <Text style={style.daysText}>
                          {item.time}
                        </Text>
                      </View>
                    </View>
                  )} />
              </View>)

              : selectedIndexType === 1 ? (
                <FlatList
                  data={reviews}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View style={style.reviewViewStyle}>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                          <Text style={style.headingText}>{item.name}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={style.reviewDateText}>{formatDate(item.date, "DD-MM-YYYY")}</Text>
                        </View>

                      </View>
                      <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <StarRating
                          disabled={false}
                          maxStars={5}
                          containerStyle={{ fontSize: 20, }}
                          fullStarColor={'#FE9800'}
                          starSize={20}
                          rating={parseInt(item.rating)}

                        />
                        <Text style={{ marginLeft: 10 }}>{item.rating}</Text>
                      </View>
                      <Text
                        style={style.commentText}>
                        {item.comments}
                      </Text>
                    </View>
                  )} />
              )
                : null
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}
function RestaurantDetailsState(state) {
  return {
    user: state.user,
  };
}
export default connect(RestaurantDetailsState)(RestaurantDetails);