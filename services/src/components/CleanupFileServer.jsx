//
// Copyright (c) 2020 Nutanix Inc. All rights reserved.
//
// The file for summary tab view
//
import React from 'react';
import {
  Button,
  Progress,
  Checkbox,
  Divider,
  StorageIcon,
  QuestionIcon,
  FlexLayout,
  FlexItem,
  Separator,
  StackingLayout,
  TextGroup,
  TextLabel,
  Title,
  VerticalSeparator,
  Modal,
  Select,
  MainPageLayout,
  NavBarLayout,
  MagGlassIcon,
  ThemeManager
} from 'prism-reactjs';

class CleanupFileServer extends React.Component {

  constructor() {
    super();
    this.state = {
      smartStorage: true,
      visible: false,

      totalStorage: 128,
      totalUsed: 72,
      totalPercent: 50,
      categories: [
        {
          name: 'photos',
          label: 'Photos and videos',
          icon: (<StorageIcon />),
          used: 42
        },
        {
          name: 'music',
          label: 'Music and audio',
          icon: (<StorageIcon />),
          used: 30
        },
        {
          name: 'games',
          label: 'Games',
          icon: (<StorageIcon />),
          used: 0.53
        },
        {
          name: 'movies',
          label: 'Movies & TV Apps',
          icon: (<StorageIcon />),
          used: 2.4
        },
        {
          name: 'apps',
          label: 'Other Apps',
          icon: (<QuestionIcon />),
          used: 17
        }
      ]
    };
  }

  freeUpSpace = (value) => {
    this.setState({ visible: false });
    const categories = this.state.categories.map((cat) => {
      return {
        ...{},
        ...cat
      };
    });
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].name === value) {
        categories[i].used = Math.max(1, categories[i].used - 1);
      }
    }
    this.setState({
      categories
    }, () => {
      this.recalculate();
    });
  }

  toggleSmartStorage = () => {
    this.setState({
      smartStorage: !this.state.smartStorage
    });
  }

  handleSelectChange = (value) => {
    this.freeUpSpace(value);
  }

  recalculate() {
    const categories = this.state.categories.map((cat) => {
      return {
        ...{},
        ...cat
      };
    });
    let totalUsed = 0;
    for (let i = 0; i < categories.length; i++) {
      totalUsed += categories[i].used;
    }
    const totalPercent = Math.ceil((totalUsed / this.state.totalStorage) * 100);
    this.setState({
      totalUsed,
      totalPercent
    });
  }


  renderCategories() {
    return this.state.categories.map((category, index) => {
      return (
        <FlexLayout key={ `cat_${index}` }>
          <FlexItem alignSelf="center">
            { category.icon }
          </FlexItem>
          <FlexItem flexShrink="0" flexGrow="1">
            <FlexLayout>
              <FlexItem flexShrink="0" flexGrow="1">
                <StackingLayout itemSpacing="5px">
                  <FlexLayout>
                    <FlexItem flexGrow="1">
                      { category.label }
                    </FlexItem>
                    <FlexItem>
                      { `${category.used} GB`}
                    </FlexItem>
                  </FlexLayout>
                  <Progress
                    showInfo={ false }
                    percent={ Math.ceil((category.used / this.state.totalUsed) * 100) }
                  />
                </StackingLayout>
              </FlexItem>
            </FlexLayout>
          </FlexItem>
        </FlexLayout>
      );
    });
  }

  render() {
    var data = [
      {
        value: 'photos',
        title: 'Photos and videos ',
        key: '1'
      },
      {
        value: 'music',
        title: 'Music and audio',
        key: '2',
        className: 'option-two-class'
      },
      {
        value: 'games',
        title: 'Games',
        key: '3',
        className: 'option-three-class'
      },
      {
        value: 'movies',
        title: 'Movies',
        key: '4',
        className: 'option-four-class'
      },
      {
        value: 'apps',
        title: 'Other Apps',
        key: '5',
        className: 'option-five-class'
      }
    ];

    const header = (
      <StackingLayout>
        <NavBarLayout
          prefix={ <MagGlassIcon color={ ThemeManager.getVar('gray-2') } /> } />
      </StackingLayout>
    );
    const body = (<StackingLayout itemSpacing="10px" padding="30px">
      <Modal
        visible={ this.state.visible }
        title="Free up Space"
        primaryButtonLabel="Done"
        primaryButtonClick={ () => this.setState({ visible: false }) }
        onCancel={ () => this.setState({ visible: false }) }
      >
        <StackingLayout padding="20px">
          <Select
            placeholder="Select Option"
            selectOptions={ data }
            onChange={ this.handleSelectChange }
            dropdownClassName="extra-class"
            className="select-custom-class"
          />
        </StackingLayout>
      </Modal>
      <FlexLayout justifyContent="center" alignItems="center" itemSpacing="40px">
        <FlexItem>
          <FlexLayout itemSpacing="5px" flexDirection="column" alignItems="center">
            <FlexItem>
              <FlexLayout itemSpacing="5px">
                <FlexItem flexGrow="0">
                  <Title size="h1">
                    { this.state.totalUsed }
                  </Title>
                </FlexItem>
                <FlexItem flexGrow="0">
                  <TextLabel type={ TextLabel.TEXT_LABEL_TYPE.PRIMARY }>
                    GB
                  </TextLabel>
                </FlexItem>
              </FlexLayout>
            </FlexItem>

            <FlexItem>
              <TextGroup>
                <TextLabel type={ TextLabel.TEXT_LABEL_TYPE.PRIMARY }>
                  { `Used of ${this.state.totalStorage} GB` }
                </TextLabel>
              </TextGroup>
            </FlexItem>

            <FlexItem>
              <Button type="primary"
                onClick={ () => this.setState({ visible: true }) }>
                Free up space
              </Button>
            </FlexItem>
          </FlexLayout>
        </FlexItem>
        <FlexItem>
          <Progress
            type="circle"
            percent={ this.state.totalPercent }
            format={
              () => {
                return `${this.state.totalPercent}% used`;
              }
            }
          />
        </FlexItem>
      </FlexLayout>

      <FlexLayout>
        <FlexItem>
          <StorageIcon />
        </FlexItem>
        <FlexItem flexGrow="1" flexShrink="0">
          Smart Storage
        </FlexItem>
        <FlexItem>
          <Separator separator={ <VerticalSeparator /> }>
            <span />
            <Checkbox
              id="toggle"
              type="toggle"
              checked={ this.state.smartStorage }
              onChange={ this.toggleSmartStorage }
            />
          </Separator>
        </FlexItem>
      </FlexLayout>
      <Divider />
      { this.renderCategories() }
    </StackingLayout>);
    return (
      <MainPageLayout
        header={ header }
        body={ body }
        oldMainPageLayout={ false } />

    );
  }

  componentWillMount() {
    this.recalculate();
  }

}
export default CleanupFileServer;
