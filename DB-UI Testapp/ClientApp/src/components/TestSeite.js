import '@db-ui/core/dist/css/enterprise/db-ui-core.vars.css';
import React, { Component } from 'react';
import {
    DbBrand,
    DbHeader,
    DbIcon,
    DbPage
} from '@db-ui/react-elements';


export class TestSeite extends Component {
    render() {
        return (
            <>
                <DbPage>
                    <DbHeader slot="header">
                        <DbBrand>Test App!</DbBrand>
                    </DbHeader>
                    <DbIcon icon="account" variant="32-outline" />
                </DbPage>
            </>
        );
    }
}