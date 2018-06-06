import React, { Component } from 'react';
import './HttpApi.scss';

class HttpApi extends Component {
  render() {
    return (
        <div className="content">
          <div className="content-top">
            <h1>貔貅开发者接口 (API version 2)</h1>
            <small>接口URI前缀: /api/v2</small><br/>
            <small>返回结果格式: JSON</small>
            <br/>
            <br/>
            <a href="/api/websocketapi">Websocket接口</a>
            &nbsp;
            |
            &nbsp;
            <a href="/index/oauth">OAuth认证接口</a>
          </div>
          <div className="content-item">
            <h1>Public/Private API</h1>
            <p>貔貅开发者接口包含两类API: Public API是不需要任何验证就可以使用的接口，而Private API是需要进行签名验证的接口。下表列出了两者的主要区别:</p>
            <table>
              <thead>
                <tr>
                  <th>Public API</th>
                  <th>Private API</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>无需验证</td>
                  <td>需要验证</td>
                </tr>
                <tr>
                  <td>无限制</td>
                  <td>对于每个用户, 最多6000个请求每5分钟(平均20个请求/秒); 如果有更高需求可以联系貔貅管理员</td>
                </tr>
                <tr>
                  <td>无需准备立即可用</td>
                  <td>先要向貔貅管理员申请access/secret key</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-item">
            <h1>如何签名 (验证)</h1>
            <p>在给一个Private API请求签名之前, 你必须准备好你的access/secret key. 在注册并认证通过后之后，只需访问<a href="/index/token">API密钥</a>页面就可以得到您的密钥。</p>
            <p>所有的Private API都需要这3个用于身份验证的参数:</p>
            <table>
              <thead>
                <tr>
                  <th>access_key</th>
                  <th>你的access key</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>tonce</td>
                  <td>tonce是一个用正整数表示的时间戳，代表了从<a href="http://en.wikipedia.org/wiki/Unix_epoch">Unix epoch</a>到当前时间所经过的毫秒(ms)数。tonce与服务器时间不得超过正负30秒。一个tonce只能使用一次。</td>
                </tr>
                <tr>
                  <td>signature</td>
                  <td>使用你的secret key生成的签名</td>
                </tr>
              </tbody>
            </table>
            <p>签名的生成很简单，先把请求表示为一个字符串, 然后对这个字符串做hash:</p>
            <div className="code">
              <pre><code className="undefined">hash = HMAC-SHA256(payload, secret_key).to_hex</code></pre>
            </div>
            <p>Payload就是代表这个请求的字符串, 通过组合HTTP方法, 请求地址和请求参数得到:</p>
            <div className="code">
              <pre><code className="undefined">
              # canonical_verb是HTTP方法，例如GET<br/>
              # canonical_uri是请求地址， 例如/api/v2/markets<br/>
              # canonical_query是请求参数通过&amp;连接而成的字符串，参数包括access_key和tonce, 参数必须按照字母序排列，例如access_key=xxx&amp;foo=bar&amp;tonce=123456789<br/>
              # 最后再把这三个字符串通过'|'字符连接起来，看起来就像这样:<br/>
              # GET|/api/v2/markets|access_key=xxx&amp;foo=bar&amp;tonce=123456789<br/>
              def payload<br/>
                {`"#{canonical_verb}|#{canonical_uri}|#{canonical_query}"`}<br/>
              end<br/></code></pre>
            </div>
              <p>假设我的secret key是"yyy", 那么使用SHA256算法对上面例子中的payload计算HMAC的结果是(以hex表示)：</p>
            <div className="code">
              <pre><code className="undefined">hash = HMAC-SHA256('GET|/api/v2/markets|access_key=xxx&amp;foo=bar&amp;tonce=123456789', 'yyy').to_hex<br/>
              = 'e324059be4491ed8e528aa7b8735af1e96547fbec96db962d51feb7bf1b64dee'</code></pre>
            </div>
              <p>现在我们就可以这样来使用这个签名请求(以curl为例):</p>
              <div className="code">
                <pre>
                  <code className="undefined">curl -X GET 'https://peatio.com/api/v2/markets?access_key=xxx&amp;foo=bar&amp;tonce=123456789&amp;signature=e324059be4491ed8e528aa7b8735af1e96547fbec96db962d51feb7bf1b64dee'
                  </code>
                </pre>
              </div>
          </div>

          <div className="content-item">
            <h1>返回结果</h1>
            <p>如果API调用失败，返回的请求会使用对应的HTTP status code, 同时返回包含了详细错误信息的JSON数据, 比如:</p>
            <pre>
              <code className="json">
                {`{`}
                <span>"error":{`{"code":`}</span>
                <span className="number">1001</span>
                <span>,"message":</span>
                <span className="string">"market does not have a valid value"</span>
                {`}}`}
              </code>
            </pre>
            <p>所有错误都遵循上面例子的格式，只是code和message不同。code是貔貅自定义的一个错误代码, 表明此错误的类别, message是具体的出错信息.</p>
            <div className="content-item-body">
              <p>对于成功的API请求, 貔貅则会返回200作为HTTP status code, 同时返回请求的JSON数据.</p>
            </div>
            <table className="result">
              <thead>
                <tr>
                  <th>数据类型</th>
                  <th>数据结构/示例</th>
                  <th>备注</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Market</td>
                  <td>
                    <pre>
                      <code className="json">
                        {`{`}
                        <span>"at":</span>
                        <span className="number">1398410899</span>
                        <span>,"ticker":</span>
                        <span>{`{`}"buy":</span>
                        <span className="string">"3000.0",</span>
                        <span>"sell":</span>
                        <span className="string">"3100.0",</span>
                        <span>"low":</span>
                        <span className="string">"3000.0",</span>
                        <span>"high":</span>
                        <span className="string">"3000.0",</span>
                        <span>"last":</span>
                        <span className="string">"3000.0",</span>
                        <span>"vol":</span>
                        <span className="string">"0.11",</span>
                        {`}}`}
                      </code>
                    </pre>
                  </td>
                  <td>
                    <p>Market包含了某一个市场(例如btccny)的所有信息:</p>
                    <p>at: 以秒为单位的时间戳</p><p>buy/sell: 当前买入/卖出价</p>
                    <p>low/high: 过去24小时之内的最低/最高成交价</p>
                    <p>last: 最后成交价</p>
                    <p>vol: 过去24小时之内的总成交量</p>
                  </td>
                </tr>
                <tr>
                  <td>Market</td>
                  <td>
                    <pre>
                      <code className="json">
                        {`{`}
                        <span>"at":</span>
                        <span className="number">1398410899</span>
                        <span>,"ticker":</span>
                        <span>{`{`}"buy":</span>
                        <span className="string">"3000.0",</span>
                        <span>"sell":</span>
                        <span className="string">"3100.0",</span>
                        <span>"low":</span>
                        <span className="string">"3000.0",</span>
                        <span>"high":</span>
                        <span className="string">"3000.0",</span>
                        <span>"last":</span>
                        <span className="string">"3000.0",</span>
                        <span>"vol":</span>
                        <span className="string">"0.11",</span>
                        {`}}`}
                      </code>
                    </pre>
                  </td>
                  <td>
                    <p>Market包含了某一个市场(例如btccny)的所有信息:</p>
                    <p>at: 以秒为单位的时间戳</p><p>buy/sell: 当前买入/卖出价</p>
                    <p>low/high: 过去24小时之内的最低/最高成交价</p>
                    <p>last: 最后成交价</p>
                    <p>vol: 过去24小时之内的总成交量</p>
                  </td>
                </tr>
                <tr>
                  <td>Market</td>
                  <td>
                    <pre>
                      <code className="json">
                        {`{`}
                        <span>"at":</span>
                        <span className="number">1398410899</span>
                        <span>,"ticker":</span>
                        <span>{`{`}"buy":</span>
                        <span className="string">"3000.0",</span>
                        <span>"sell":</span>
                        <span className="string">"3100.0",</span>
                        <span>"low":</span>
                        <span className="string">"3000.0",</span>
                        <span>"high":</span>
                        <span className="string">"3000.0",</span>
                        <span>"last":</span>
                        <span className="string">"3000.0",</span>
                        <span>"vol":</span>
                        <span className="string">"0.11",</span>
                        {`}}`}
                      </code>
                    </pre>
                  </td>
                  <td>
                    <p>Market包含了某一个市场(例如btccny)的所有信息:</p>
                    <p>at: 以秒为单位的时间戳</p><p>buy/sell: 当前买入/卖出价</p>
                    <p>low/high: 过去24小时之内的最低/最高成交价</p>
                    <p>last: 最后成交价</p>
                    <p>vol: 过去24小时之内的总成交量</p>
                  </td>
                </tr>
                <tr>
                  <td>Market</td>
                  <td>
                    <pre>
                      <code className="json">
                        {`{`}
                        <span>"at":</span>
                        <span className="number">1398410899</span>
                        <span>,"ticker":</span>
                        <span>{`{`}"buy":</span>
                        <span className="string">"3000.0",</span>
                        <span>"sell":</span>
                        <span className="string">"3100.0",</span>
                        <span>"low":</span>
                        <span className="string">"3000.0",</span>
                        <span>"high":</span>
                        <span className="string">"3000.0",</span>
                        <span>"last":</span>
                        <span className="string">"3000.0",</span>
                        <span>"vol":</span>
                        <span className="string">"0.11",</span>
                        {`}}`}
                      </code>
                    </pre>
                  </td>
                  <td>
                    <p>Market包含了某一个市场(例如btccny)的所有信息:</p>
                    <p>at: 以秒为单位的时间戳</p><p>buy/sell: 当前买入/卖出价</p>
                    <p>low/high: 过去24小时之内的最低/最高成交价</p>
                    <p>last: 最后成交价</p>
                    <p>vol: 过去24小时之内的总成交量</p>
                  </td>
                </tr>
                <tr>
                  <td>Market</td>
                  <td>
                    <pre>
                      <code className="json">
                        {`{`}
                        <span>"at":</span>
                        <span className="number">1398410899</span>
                        <span>,"ticker":</span>
                        <span>{`{`}"buy":</span>
                        <span className="string">"3000.0",</span>
                        <span>"sell":</span>
                        <span className="string">"3100.0",</span>
                        <span>"low":</span>
                        <span className="string">"3000.0",</span>
                        <span>"high":</span>
                        <span className="string">"3000.0",</span>
                        <span>"last":</span>
                        <span className="string">"3000.0",</span>
                        <span>"vol":</span>
                        <span className="string">"0.11",</span>
                        {`}}`}
                      </code>
                    </pre>
                  </td>
                  <td>
                    <p>Market包含了某一个市场(例如btccny)的所有信息:</p>
                    <p>at: 以秒为单位的时间戳</p><p>buy/sell: 当前买入/卖出价</p>
                    <p>low/high: 过去24小时之内的最低/最高成交价</p>
                    <p>last: 最后成交价</p>
                    <p>vol: 过去24小时之内的总成交量</p>
                  </td>
                </tr>
                <tr>
                  <td>Market</td>
                  <td>
                    <pre>
                      <code className="json">
                        {`{`}
                        <span>"at":</span>
                        <span className="number">1398410899</span>
                        <span>,"ticker":</span>
                        <span>{`{`}"buy":</span>
                        <span className="string">"3000.0",</span>
                        <span>"sell":</span>
                        <span className="string">"3100.0",</span>
                        <span>"low":</span>
                        <span className="string">"3000.0",</span>
                        <span>"high":</span>
                        <span className="string">"3000.0",</span>
                        <span>"last":</span>
                        <span className="string">"3000.0",</span>
                        <span>"vol":</span>
                        <span className="string">"0.11",</span>
                        {`}}`}
                      </code>
                    </pre>
                  </td>
                  <td>
                    <p>Market包含了某一个市场(例如btccny)的所有信息:</p>
                    <p>at: 以秒为单位的时间戳</p><p>buy/sell: 当前买入/卖出价</p>
                    <p>low/high: 过去24小时之内的最低/最高成交价</p>
                    <p>last: 最后成交价</p>
                    <p>vol: 过去24小时之内的总成交量</p>
                  </td>
                </tr>
                <tr>
                  <td>Market</td>
                  <td>
                    <pre>
                      <code className="json">
                        {`{`}
                        <span>"at":</span>
                        <span className="number">1398410899</span>
                        <span>,"ticker":</span>
                        <span>{`{`}"buy":</span>
                        <span className="string">"3000.0",</span>
                        <span>"sell":</span>
                        <span className="string">"3100.0",</span>
                        <span>"low":</span>
                        <span className="string">"3000.0",</span>
                        <span>"high":</span>
                        <span className="string">"3000.0",</span>
                        <span>"last":</span>
                        <span className="string">"3000.0",</span>
                        <span>"vol":</span>
                        <span className="string">"0.11",</span>
                        {`}}`}
                      </code>
                    </pre>
                  </td>
                  <td>
                    <p>Market包含了某一个市场(例如btccny)的所有信息:</p>
                    <p>at: 以秒为单位的时间戳</p><p>buy/sell: 当前买入/卖出价</p>
                    <p>low/high: 过去24小时之内的最低/最高成交价</p>
                    <p>last: 最后成交价</p>
                    <p>vol: 过去24小时之内的总成交量</p>
                  </td>
                </tr>
                <tr>
                  <td>Market</td>
                  <td>
                    <pre>
                      <code className="json">
                        {`{`}
                        <span>"at":</span>
                        <span className="number">1398410899</span>
                        <span>,"ticker":</span>
                        <span>{`{`}"buy":</span>
                        <span className="string">"3000.0",</span>
                        <span>"sell":</span>
                        <span className="string">"3100.0",</span>
                        <span>"low":</span>
                        <span className="string">"3000.0",</span>
                        <span>"high":</span>
                        <span className="string">"3000.0",</span>
                        <span>"last":</span>
                        <span className="string">"3000.0",</span>
                        <span>"vol":</span>
                        <span className="string">"0.11",</span>
                        {`}}`}
                      </code>
                    </pre>
                  </td>
                  <td>
                    <p>Market包含了某一个市场(例如btccny)的所有信息:</p>
                    <p>at: 以秒为单位的时间戳</p><p>buy/sell: 当前买入/卖出价</p>
                    <p>low/high: 过去24小时之内的最低/最高成交价</p>
                    <p>last: 最后成交价</p>
                    <p>vol: 过去24小时之内的总成交量</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-item">
            <h1>注意事项</h1>
            <table>
              <thead>
                <tr>
                  <th>API</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>POST /api/v2/order/delete</td>
                  <td>取消挂单. 取消挂单是一个异步操作,api成功返回仅代表取消请求已经成功提交,服务器正在处理,不代表订单已经取消. 当你的挂单有尚未处理的成交(trade)事务,或者取消请求队列繁忙时,该订单会延迟取消. api返回被取消的订单,返回结果中的订单不一定处于取消状态,你的代码不应该依赖api返回结果,而应该通过/api/v2/order或者websocket api来得到该订单的最新状态.</td>
                </tr>
                <tr>
                  <td>POST /api/v2/orders/clear</td>
                  <td>取消你所有的挂单. 取消挂单是一个异步操作, api成功返回代表取消请求已经提交,服务器正在处理. api返回的结果是你当前挂单的集合,结果中的订单不一定处于取消状态.</td>
                </tr>
                <tr>
                  <td>无需准备立即可用</td>
                  <td>先要向貔貅管理员申请access/secret key</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-item">
            <h1>相关库/工具列表</h1>
            <ul>
              <li>
                <h4>
                  <a href="http://github.com/peatio/peatio-client-ruby">peatio-client-ruby (ruby)</a>
                </h4>
              </li>
            </ul>
          </div>
          <div className="content-item">
            <h1>API列表</h1>
            <p>以下是详细的API列表，展开可以看到每个API的URI和可接受的参数。所有需要access_key/tonce/signature的都是Private API, 其他的则是Public API。</p>
          </div>
        </div>
    )
  }
}

export default HttpApi