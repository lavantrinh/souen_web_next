import React from 'react';
import Table from 'react-bootstrap/Table';
function HistoryTable(props) {
    return (
        <Table bordered>
            <tbody>
                <tr>
                    <th>平成19年 4月</th>
                    <td>株式会社創円 設立</td>
                </tr>
                <tr>
                    <th>平成19年 11月</th>
                    <td>タッピングマシン CTS900NT 導入</td>
                </tr>
                <tr>
                    <th>平成20年 2月</th>
                    <td>パンチングマシン EM255NT<br/>
ベンディングマシン FBD1025NT<br/>
ベンディングマシン FBD8025NT<br/>
ベンディングマシン FMB3613NT 導入</td>
                </tr>
                <tr>
                    <th>平成23年 1月</th>
                    <td>ベンディングマシン HDS1303NT 導入</td>
                </tr>
                <tr>
                    <th>平成24年 2月</th>
                    <td>ベトナムホーチミン事務所設立</td>
                </tr>
                <tr>
                    <th>平成24年 5月</th>
                    <td>パンチレーザー複合マシン LC2012C1NT導入</td>
                </tr>
                <tr>
                    <th>平成29年7月</th>
                    <td>ファイバーレーザー溶接機　FLW600MT 導入</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default HistoryTable;