<mj-raw>{% for line in line_items %}</mj-raw>
<mj-section mj-class="receipt-section" >
  <mj-group>
    <mj-column mj-class="receipt-column receipt-desc-column" >
      <mj-table 
        mj-class="image-text" 
        padding="0 20px 0 20px">
        <tr>
          <td 
            valign="top"
            class="pad-left"
            style="width: 50px; padding: 15px 15px 0 0;">
            <a href="{{shop.url}}{{line.product.url}}" style="border-bottom: none">
              <img 
                class="receipt-image" 
                src="{{ line.image | img_url: '200x' }}"
                style="width: 50px;"
              />
            </a>
          </td>
          <td valign="top">
             <p>
              <a href="{{shop.url}}{{line.product.url}}" class="line-item-link" target="_blank">
                <span class="title">
                  {{ line.title }}
                </span>
              </a>
            </p>
          </td>
        </tr>
      </mj-table>
    </mj-column>
    <mj-column mj-class="receipt-column receipt-price-column" >
      <mj-text mj-class="receipt-text receipt-price-text text-right" >
        <p>{{ line.quantity }}×</p>
      </mj-text>
    </mj-column>
    <mj-divider mj-class="divider" padding-top="20px" padding-bottom="20px" />
  </mj-group>
</mj-section>
<mj-raw>{% endfor %}</mj-raw>
