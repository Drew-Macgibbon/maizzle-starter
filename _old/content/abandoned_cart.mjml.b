
<mj-section mj-class="main-copy-section" >
    <mj-column mj-class="main-copy-column" >
      <mj-text mj-class="main-copy-text">
        <p>
        {% if billing_address.first_name %}
          {% if item_count == 1 %}
            Hi {{ billing_address.first_name }},
          {% else %}
            Hi {{ billing_address.first_name }},
          {% endif %} 
        {% else %}
            Hi,
        {% endif %}
        </p>
        {% if custom_message != blank %}
          <p>{{ custom_message }}</p>
        {% else %}
          <p>We are holding the items in your cart.</p>
          <p>If you need any help or assistance feel free to reach out to us.</p>
          <p>Thank you!</p>
        {% endif %}
      </mj-text>
    <mj-divider mj-class="divider" padding-top="60px" padding-bottom="10px" />
    </mj-column>
  </mj-section>