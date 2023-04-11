import React from 'react';
import Table from 'react-bootstrap/Table';
function ProfileTable(props) {
    return (
        <Table bordered>
            <tbody>
                <tr>
                    <th>社名</th>
                    <td>株式会社創円</td>

                </tr>
                <tr>
                    <th>本社</th>
                    <td><address>
                        <span>〒455-0804</span><br />
                        名古屋市港区当地4丁目2203 <a href='https://goo.gl/maps/HzWc1vKz6tyZD9zP9'><i className="bi bi-globe-asia-australia"></i></a><br />
                        Fax: 052-381-8817<br />
                        <a href='tel:+0523848150'>Tel: 052-384-8150</a><br />
                        <a href='mailto:hattori@k-souen.co.jp'>hattori@k-souen.co.jp</a>
                    </address></td>

                </tr>
                <tr>
                    <th>創立年度</th>
                    <td>平成19年 4月 3日</td>

                </tr>
                <tr>
                    <th>代表者</th>
                    <td>代表取締役: 服部太志（ハットリ タイシ）</td>

                </tr>
                <tr>
                    <th>従業員数</th>
                    <td>35名</td>

                </tr>
                <tr>
                    <th>資本金</th>
                    <td>1,000万円</td>

                </tr>
                <tr>
                    <th>主な取引先</th>
                    <td>ホシザキ株式会社<br />
                        株式会社ネスター<br />
                        アンレット株式会社<br />
                        トピー実業株式会社<br />
                        シンポ株式会社<br />
                        ブラザー精密株式会社<br />
                        株式会社トヨトミ<br />
                        株式会社ハヤカワカンパニー<br />
                        山中産業株式会社<br />
                        株式会社サカイ<br />
                        江洋ラヂエーター株式会社<br />
                        服部工業株式会社<br />
                        株式会社中央製作所<br />
                        リンタツ株式会社</td>

                </tr>
                <tr>
                    <th>取引銀行(順不同)</th>
                    <td>愛知信用金庫<br />
                        愛知銀行</td>

                </tr>
                <tr>
                    <th>事業内容</th>
                    <td>精密板金加工各種<br />
                        厨房製品・器具<br />
                        ガス器具<br />
                        冷暖房器具<br />
                        自動車<br />
                        建築金物<br />
                        工作機械カバー<br />
                        etc、金属加工を中心とした各部品製造・組立</td>

                </tr>
            </tbody>
        </Table>
    );
}

export default ProfileTable;