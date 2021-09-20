import { Dimensions, StyleSheet } from 'react-native';
import { primaryColor } from '../setup/config'
export default styles = StyleSheet.create({
    headingText: {
        color: '#333',
        fontSize: 14,
        fontFamily: 'OpenSans-Bold',
        marginTop: 8,
    },
    locationText: {
        color: '#6A6D7C',
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        lineHeight: 20
    },
    iconStyle: {
        fontSize: 20,
        color: primaryColor
    },
    marginspaceText: {
        marginTop: 5
    },
    textBoxRow: {
        flexDirection: "row",
        borderColor: primaryColor,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
        height: 38,
    },
    cuisineText: {
        color: '#6A6D7C',
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
        lineHeight: 20
    },
    marginSpaceLeft: {
        marginLeft: 5
    },
    detailHeadingText: {
        color: '#333',
        fontSize: 18,
        fontFamily: 'OpenSans-Bold',
        marginTop: 8,
    },
    SegmentedStyle: {
        borderWidth: 1,
        borderColor: primaryColor,
        height: 40
    },
    activeTab: {
        color: primaryColor,
        fontFamily: 'opensans-bold',
    },
    daysText: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily: 'OpenSans-Regular'
    },
    dayText: {
        color: '#333',
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        lineHeight: 20
    },
    pickerView: {
        borderRadius: 8,
        height: 45,
        justifyContent: 'center',
        backgroundColor: '#F0F0F0',
        borderWidth: 1,
        borderColor: '#909090'
    },
    detailsImageHeight: {
        marginHorizontal: 5,
        marginVertical: 10,
        minHeight: 200
    },
    imageHeight: {
        height: '100%',
        width: '100%',
        borderColor: primaryColor,
        borderWidth: 0.5,
        borderRadius: 5
    },
    daysBorder: {
        borderLeftWidth: 0.5,
        borderLeftColor: '#909090',
        borderRightWidth: 0.5,
        borderRightColor: '#909090',
        borderTopWidth: 0.5,
        borderTopColor: '#909090',
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 20
    },
    daysInnerView: {
        flexDirection: 'row',
        padding: 5,
        marginVertical: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#909090',
        marginBottom: 1,
        paddingBottom: 5,
        borderRadius: 2,
    },
    reviewViewStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#909090',
        marginTop: 20,
        paddingBottom: 10
    },
    reviewDateText: {
        textAlign: 'right',
        color: '#6A6D7C',
        marginTop: 8,
    },
    commentText: {
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
        marginTop: 15,
        color: '#8E9294',
        textAlign: 'auto',
        lineHeight: 20,
    },
    orderButton: {
        backgroundColor: primaryColor,
        flex: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20
    },
    orderNowText: {
        color: "#fff",
        fontFamily: 'opensans-bold',
        fontSize: 16
    },
    orderNowView: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
    }

})