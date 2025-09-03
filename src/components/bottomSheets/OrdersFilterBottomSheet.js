import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import tw from 'twrnc';
import { colors } from '../../theme/colors';

export const OrdersFilterBottomSheet = forwardRef(({ onApplyFilter }, ref) => {
  const [selected, setSelected] = useState('price_low');
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['45%'], []);

  // Expose methods
  useImperativeHandle(ref, () => ({
    present: () => bottomSheetModalRef.current?.present(),
    dismiss: () => bottomSheetModalRef.current?.dismiss(),
  }));

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="close"
        opacity={0.5}
      />
    ),
    []
  );

  const FilterRow = ({ id, label }) => {
    const isActive = selected === id;
    return (
      <TouchableOpacity
        onPress={() => setSelected(id)}
        style={tw`flex-row items-center py-3`}
        activeOpacity={0.7}
      >
        <Ionicons
          name={isActive ? 'radio-button-on' : 'radio-button-off'}
          size={18}
          color={isActive ? '#ef4444' : '#9ca3af'}
          style={tw`mr-3`}
        />
        <Text style={tw.style(`text-base text-gray-500`, isActive && `text-gray-900 font-medium`)}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleApply = () => {
    onApplyFilter?.(selected);
    bottomSheetModalRef.current?.dismiss();
  };

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      backgroundStyle={tw`bg-white rounded-t-3xl`}
      handleIndicatorStyle={tw`hidden`}
    >
      <View style={tw`flex-1 p-4`}>
        {/* Header */}
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <Text style={tw`text-xl font-semibold text-gray-900`}>Filter by</Text>
          <TouchableOpacity onPress={() => bottomSheetModalRef.current?.dismiss()}>
            <Ionicons name="close" size={24} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* Filter Options */}
        <View style={tw`flex-1`}>
          <FilterRow id="delivered" label="Delivered orders" />
          <FilterRow id="cancelled" label="Cancelled orders" />
          <FilterRow id="price_low" label="Price (Low to high)" />
          <FilterRow id="price_high" label="Price (High to low)" />
        </View>

        {/* Apply button */}
        <TouchableOpacity
          style={tw`bg-[${colors.primary}] py-3 rounded-lg items-center my-4`}
          onPress={handleApply}
        >
          <Text style={tw`text-white font-semibold text-base`}>View results</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default OrdersFilterBottomSheet;
