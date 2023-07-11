import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ToggleButton from '../ToggleButton';
import { Button } from '../Button';
import { SET_THEME } from '../../redux/actions/theme-actions';

const Container = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.background_primary};
`;

const TemplateChildren: React.FC = ({ setTheme, themes, themeName }: any) => {
    const onToggle = () => {
        const payload = {
            theme: themeName === 'light' ? themes['dark'] : themes['light'],
            name: themeName === 'light' ? 'dark' : 'light',
        };
        setTheme(payload);
    };

    return (
        <Container>
            <Container>
                <ToggleButton cbHandler={onToggle} />

                <h1>Theme Builder</h1>
                <p>
                    This is a theming system with a{' '}
                    <a href="#" target="_blank">
                        Theme Switcher
                    </a>
                    . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
                <Button size="Small">Learn More</Button>
            </Container>
        </Container>
    );
};

// Get state to props
const mapStateToProps = (state: any) => ({
    themes: state.theme.themes,
    themeName: state.theme.themeName,
});

// Get dispatch / function to props
const mapDispatchToProps = (dispatch: any) => ({
    setTheme: (id: any) => dispatch({ type: SET_THEME, payload: id }),
});
export default connect(mapStateToProps, mapDispatchToProps)(TemplateChildren);