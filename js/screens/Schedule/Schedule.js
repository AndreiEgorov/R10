import React from "react";
import SectionLists from "./../../components/SectionList/SectionList";
import PropTypes from "prop-types";

const Schedule = ({ data, navigation, context }) => {
  return <SectionLists data={data} navigation={navigation} context={context} />;
};

export default Schedule;

Schedule.propTypes = {
  data: PropTypes.array,
  navigation: PropTypes.object,
  context: PropTypes.object
};
