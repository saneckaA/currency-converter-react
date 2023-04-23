import { GridContainer, Item, Flex, Button, Time } from "./styled";

const Container = ({ formContent, resultContent, timeContent, showResult, buttonContent, mediaTimeContent }) => {

    return (
        <GridContainer>
            <Item
                first
            >
                <Flex>
                <Button button>
                    {buttonContent}
                </Button>
                <Time time>
                    {mediaTimeContent}
                </Time>
                </Flex>
                <p>
                    {formContent}
                </p>
            </Item>
            <Item
                second
            >
                <p>
                    {timeContent}
                </p>
            </Item>
            {
                showResult ?
                    <Item
                        last
                    >
                        {resultContent}
                    </Item>
                    : null
            }
        </GridContainer>
    )
};

export default Container;